import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { CartComponent } from './cart/cart.component';
import { FoodListComponent } from './food-list/food-list.component';
import { UsersiginComponent } from './usersigin/usersigin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { EditpasswordComponent } from './editpassword/editpassword.component';
import { AdminhomepageComponent } from './adminhomepage/adminhomepage.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
    HomeComponent,

    PaymentComponent,
     WelcomepageComponent,
     AboutusComponent,
     ContactusComponent,
     OrderSummaryComponent,
     CartComponent,
     FoodListComponent,
     UsersiginComponent,
     UsersignupComponent,
     EditpasswordComponent,
     AdminhomepageComponent,
     AdminsignupComponent,
     AdminsigninComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
