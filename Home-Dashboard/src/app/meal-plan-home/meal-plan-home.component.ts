import { Component, OnInit } from '@angular/core';


  const mealPlanWeekData: any[] = [
    {
      "Day": "Monday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Turkey Sandwhich",
      "Snack": "Almond Pack",
      "Dinner": "Cracked Pepper Salad with Fajita Chicken"
    },
    {
      "Day": "Tuesday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Turkey Sandwhich",
      "Snack": "Almond Pack",
      "Dinner": "Butternut Squash and Sweet Potato Pasta with Turkey Meat"
    },
    {
      "Day": "Wednesday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Turkey Sandwhich",
      "Snack": "Almond Pack",
      "Dinner": "Salad with Fajita Chicken"
    },
    {
      "Day": "Thursday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Turkey Sandwhich",
      "Snack": "Almond Pack",
      "Dinner": "Salad with Fajita Chicken"
    },
    {
      "Day": "Friday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Turkey Sandwhich",
      "Snack": "Almond Pack",
      "Dinner": "Salad with Fajita Chicken"
    },
    {
      "Day": "Saturday",
      "Breakfast": "TBD",
      "Lunch": "TBD",
      "Snack": "TBD",
      "Dinner": "TBD"
    },
    {
      "Day": "Sunday",
      "Breakfast": "TBD",
      "Lunch": "TBD",
      "Snack": "TBD",
      "Dinner": "TBD"
    }
  ]

@Component({
  selector: 'app-meal-plan-home',
  templateUrl: './meal-plan-home.component.html',
  styleUrls: ['./meal-plan-home.component.scss']
})
export class MealPlanHomeComponent implements OnInit {

  weekPlan: any[];
  
  constructor() {
    this.weekPlan = mealPlanWeekData
  }

  ngOnInit(): void {
  }

}



