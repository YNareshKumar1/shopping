import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './compos/home/home.component';
import { ProductsComponent } from './compos/products/products.component';
import { CartComponent } from './compos/cart/cart.component';



const routes: Routes =[
  {path:"", component: HomeComponent},
  {path:"products", component:ProductsComponent},
  {path:"cart", component:CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
