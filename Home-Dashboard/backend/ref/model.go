package main

import (
	"database/sql"
	"errors"
)

type food struct {
	ID              int    `json:"id"`
	Name            string `json:"name"`
	Expiration_Date string `json:"exp_date"`
}

func (food_item *food) getFood(db *sql.DB) error {
	return errors.New("Not Implemented")
}

func (food_item *food) updateFood(db *sql.DB) error {
	return errors.New("Not Implemented")
}

func (food_item *food) deleteFood(db *sql.DB) error {
	return errors.New("Not Implemented")
}

func (food_item *food) createFood(db *sql.DB) error {
	return errors.New("Not Implemented")
}

func getFoods(db *sql.DB, start, count int) ([]food, error) {
	return nil, errors.New("Not Implemented")
}
