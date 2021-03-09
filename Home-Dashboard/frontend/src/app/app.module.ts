import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MealPlanHomeComponent } from './meal-plan-home/meal-plan-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';
import { DisasterWaterComponent } from './food-inventory/disaster-water/disaster-water.component';
import { DisasterFoodComponent } from './food-inventory/disaster-food/disaster-food.component';
import { FreezerCapComponent } from './food-inventory/freezer-cap/freezer-cap.component';
import { FridgeCapComponent } from './food-inventory/fridge-cap/fridge-cap.component';
import { FoodExpirationComponent } from './food-inventory/food-expiration/food-expiration.component';
import { NeedToBuyComponent } from './food-inventory/need-to-buy/need-to-buy.component';
import { InventoryTableComponent } from './food-inventory/inventory-table/inventory-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MealPlanHomeComponent,
    FoodInventoryComponent,
    DisasterWaterComponent,
    DisasterFoodComponent,
    FreezerCapComponent,
    FridgeCapComponent,
    FoodExpirationComponent,
    NeedToBuyComponent,
    InventoryTableComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
