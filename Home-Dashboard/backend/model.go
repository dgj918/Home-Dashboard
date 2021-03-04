// Rendering Plain Text
// w.Write([]byte("OK"))

// Rendering JSON
// js, err := json.Marshal(profile)
//   if err != nil {
//     http.Error(w, err.Error(), http.StatusInternalServerError)
//     return
//   }

//   w.Header().Set("Content-Type", "application/json")
//   w.Write(js)

//
package main

import (
	"cloud.google.com/go/datastore"
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"google.golang.org/api/iterator"
	"log"
	"net/http"
	"time"
	"strconv"
)

type Food struct {
	id              *datastore.Key // The interger ID used in the datastore
	Description     string         `json:"description"`
	Expiration_Date time.Time      `json:"expiration_date"`
	Quantity        int64          `json:"quantity"`
}

type FoodJson struct {
	Id          string `json:"id"`
	Description string `json:"description"`
	Exp_Date    string `json:"exp_date"`
	Qty         string `json:"Qty"`
}

type FoodData struct {
	Description     string    `json:"description"`
	Expiration_Date time.Time `json:"expiration_date"`
	Quantity        int64     `json:"quantity"`
}

func (env *Env) AddFood(w http.ResponseWriter, r *http.Request) {

	fmt.Printf("Prepare item")
	// Sets the kind for the new entity.
	kind := "Food"
	taskKey := datastore.IncompleteKey(kind, nil)
	// Saves the new entity.
	key, err := env.client.Put(env.ctx, taskKey, &Food{
		Expiration_Date: time.Date(2020, time.February, 20, 0, 0, 0, 0, time.UTC),
		Description:     "yogurt",
		Quantity:        4,
	})
	if err != nil {
		log.Printf("Failed to create task: %v", err)
	}
	fmt.Printf("Created new task with ID %d\n new key", key.ID)
}

func (env *Env) GetFoods(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Getting Foods....")
	q := datastore.NewQuery("Food")
	result := env.client.Run(env.ctx, q)
	var foodArr []FoodJson
	for {
		var food Food
		var tempFood FoodJson
		key, err := result.Next(&food)
		if err == iterator.Done {
			break
		}
		if err != nil {
			// Handle error.
		}
		tempFood.Id = key.String()
		tempFood.Description = food.Description
		tempFood.Exp_Date = food.Expiration_Date.String()
		tempFood.Qty = strconv.FormatInt(food.Quantity, 16)
		foodArr = append(foodArr, tempFood)
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(foodArr)
}

func (env *Env) ConsumeFood(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	kind := "Food"
	fmt.Println(params["id"])
	key := datastore.NameKey(kind, params["id"], nil)
	err := env.client.Delete(env.ctx, key)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	} else {
		w.Write([]byte("Item was consumed"))
	}
	return
}

