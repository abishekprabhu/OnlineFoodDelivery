import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { FoodListComponent } from './food-list/food-list.component';
import { CartComponent } from './cart/cart.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersiginComponent } from './usersigin/usersigin.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
const routes: Routes = [
  {path:"",redirectTo:"welcome",pathMatch:"full"},
  
  {
  path: 'home',
  component: HomeComponent,
  
  },{
  
    path: 'about',
    component: AboutusComponent,
    },{
  
      path: 'contact',
      component: ContactusComponent,
      },
      {
  
        path: 'welcome',
        component: WelcomepageComponent,
        },
        {
  
          path: 'order-summary',
          component: OrderSummaryComponent,
          },
    {
  
      path: 'payment',
      component: PaymentComponent,
      },
      {
        path: "foodlist",
        component: FoodListComponent
      },
      {
        path: "usersignup",
        component: UsersignupComponent
      },
      {
        path: "usersignin",
        component: UsersiginComponent
      },
      {
        path: "cart",
        component: CartComponent
      },
      {
        path: "cart/:username",
        component: CartComponent
      },
      {
        path: "user-profile/:username",
        component: EditpasswordComponent
      },
      {
        path: "adminhome",
        component: AdminhomepageComponent
      },
      {
        path: "adminsignin",
        component: AdminsigninComponent
      },
      {
        path: "adminsignup",
        component: AdminsignupComponent
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
