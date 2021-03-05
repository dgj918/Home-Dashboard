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
	"strconv"
	"time"
)

type Food struct {
	Id              *datastore.Key // The interger ID used in the datastore
	Brand           string
	Name            string
	Description     string
	Expiration_Date time.Time
	Quantity        int64
}

type FoodJson struct {
	Id          string `json:"id"`
	Brand       string `json:"brand"`
	Name        string `json:"name"`
	Description string `json:"description"`
	Exp_Date    string `json:"exp_date"`
	Qty         string `json:"Qty"`
}

type FoodRequestBody struct {
	Id          string
	Brand       string
	Name        string
	Description string
	Exp_Date    string
	Qty         int64
}

func (env *Env) AddFood(w http.ResponseWriter, r *http.Request) {
	kind := "Food"
	var requestBody FoodRequestBody
	var foodToAdd Food
	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&requestBody)
	if err != nil {
		panic(err)
	}
	fmt.Println(requestBody)

	layout := "2006-01-02"
	str := requestBody.Exp_Date
	timeStr, err := time.Parse(layout , str)
	if err != nil {
		panic(err)
	}

	foodToAdd.Brand = requestBody.Brand
	foodToAdd.Name = requestBody.Name
	foodToAdd.Description = requestBody.Description
	foodToAdd.Expiration_Date = timeStr
	foodToAdd.Quantity = requestBody.Qty
	
	fmt.Printf("Prepare item")
	foodKey := datastore.NameKey(kind, requestBody.Id, nil)
	// Saves the new entity.
	key, err := env.client.Put(env.ctx, foodKey, &Food{
		Id: 			 foodKey,
		Brand:			 foodToAdd.Brand,
		Name:            foodToAdd.Name,
		Description:     foodToAdd.Description,
		Expiration_Date: foodToAdd.Expiration_Date,
		Quantity: 		 foodToAdd.Quantity,
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
		tempFood.Brand = food.Brand
		tempFood.Name = food.Name
		tempFood.Description = food.Description
		tempFood.Exp_Date = food.Expiration_Date.String()
		tempFood.Qty = strconv.FormatInt(food.Quantity, 16)
		foodArr = append(foodArr, tempFood)
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(foodArr)
}

func (env *Env) ConsumeFood(w http.ResponseWriter, r *http.Request) {
	fmt.Println("Consumming Foods")
	params := mux.Vars(r)
	kind := "Food"
	fmt.Println(params["id"])
	key := datastore.NameKey(kind, params["id"], nil)
	fmt.Println(key.String())
	err := env.client.Delete(env.ctx, key)

	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
	} else {
		w.Write([]byte("Item was consumed"))
	}
	return
}
