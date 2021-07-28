import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { SymptomfilteringComponent } from './symptomfiltering/symptomfiltering.component';
import { ProductlistComponent, SymptomParam } from './productlist/productlist.component';
import { ShoppingcartComponent, ShoppingList } from './shoppingcart/shoppingcart.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { User } from './models/newuser';
import { EditprofileComponent } from './editprofile/editprofile.component';
import { FooterComponent } from './footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CreditcardComponent } from './creditcard/creditcard.component';
import { QrcodeComponent } from './qrcode/qrcode.component';
import { PostpurchaseComponent } from './postpurchase/postpurchase.component';
import { TryComponent } from './try/try.component';
import { ManualtransferComponent } from './manualtransfer/manualtransfer.component';




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
    EditprofileComponent,
    FooterComponent,
    CreditcardComponent,
    QrcodeComponent,
    PostpurchaseComponent,
    TryComponent,
    ManualtransferComponent,

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
    IvyCarouselModule,
    HttpClientModule
  ],

  providers: [
    SymptomParam,
    ShoppingList
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
