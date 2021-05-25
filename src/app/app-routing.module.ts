import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'
import { LoginpageComponent } from './loginpage/loginpage.component'
import { PaymentpageComponent } from './paymentpage/paymentpage.component'
import { ProductlistComponent } from './productlist/productlist.component'
import { RegisterpageComponent } from './registerpage/registerpage.component'
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component'
import { SymptomfilteringComponent } from './symptomfiltering/symptomfiltering.component'
import { EditprofileComponent } from './editprofile/editprofile.component'

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'payment', component: PaymentpageComponent },
  { path: 'productlist', component: ProductlistComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent },
  { path: 'symptomfiltering', component: SymptomfilteringComponent },
  { path: 'editprofile', component: EditprofileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
