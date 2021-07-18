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
import { AuthguardGuard } from './helper/authguard.guard';
import { PostpurchaseComponent } from './postpurchase/postpurchase.component';
import { TryComponent } from './try/try.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'login', component: LoginpageComponent },
  { path: 'payment', component: PaymentpageComponent, canActivate: [AuthguardGuard] },
  { path: 'productlist', component: ProductlistComponent, canActivate: [AuthguardGuard] },
  { path: 'register', component: RegisterpageComponent },
  { path: 'shoppingcart', component: ShoppingcartComponent, canActivate: [AuthguardGuard] },
  { path: 'symptomfiltering', component: SymptomfilteringComponent, canActivate: [AuthguardGuard] },
  { path: 'editprofile', component: EditprofileComponent, canActivate: [AuthguardGuard] },
  { path: 'postpurchase', component: PostpurchaseComponent, canActivate: [AuthguardGuard] },
  { path: 'try', component: TryComponent, canActivate: [AuthguardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
