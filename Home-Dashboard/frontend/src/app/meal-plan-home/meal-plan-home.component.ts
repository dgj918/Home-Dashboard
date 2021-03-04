import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 

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
      "Lunch": "Salad",
      "Snack": "Almond Pack",
      "Dinner": "Steak and potatoes"
    },
    {
      "Day": "Wednesday",
      "Breakfast": "Breakfast Burrito",
      "Lunch": "Salad with Fajita Meat",
      "Snack": "Almond Pack",
      "Dinner": "Butternut Squash and Sweet Potato Pasta with Turkey Meat"
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

  const dayOfTheWeekConversion = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]

@Component({
  selector: 'app-meal-plan-home',
  templateUrl: './meal-plan-home.component.html',
  styleUrls: ['./meal-plan-home.component.scss']
})
export class MealPlanHomeComponent implements OnInit {
  weekPlan: any[];
  doc: any;
  today: Date;
  dayNum: number;
  dayOfTheWeek: string;

  constructor(@Inject(DOCUMENT) document) {
    this.weekPlan = mealPlanWeekData;
    this.doc = document;
    this.today = new Date();
    this.dayNum = this.today.getDay();
    this.dayOfTheWeek = dayOfTheWeekConversion[this.dayNum]
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.goToDayOfTheWeek()
  }

  goToDayOfTheWeek(){
    if (this.dayNum > 1) {
      this.doc.getElementById(this.dayOfTheWeek).scrollIntoView({behavior: 'smooth'});
    }
  }

}



