import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; 
import {MatSelectModule} from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SymptomfilteringComponent } from './symptomfiltering/symptomfiltering.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { User } from './models/newuser';




@NgModule({
  declarations: [
    AppComponent,
    RegisterpageComponent,
    LoginpageComponent,
    SymptomfilteringComponent,
    ProductlistComponent,
    ShoppingcartComponent,
    PaymentpageComponent,
    HomepageComponent,
      
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatSelectModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
