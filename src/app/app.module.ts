import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



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
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
