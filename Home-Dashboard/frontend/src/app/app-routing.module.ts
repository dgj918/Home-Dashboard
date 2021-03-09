import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodInventoryComponent } from './food-inventory/food-inventory.component';

const routes: Routes = [
  { path:"food-inv", component: FoodInventoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
