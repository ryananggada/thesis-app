import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from './models/test';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tong-fang';
  register: boolean = false;
  homepage: boolean = false;
  editprofile: boolean = true;
  showlogout: boolean = true;
  symptomfiltering: boolean = false;
  showlogin: boolean = true;
  productlist: boolean = false;
  shoppingcart: boolean = false;
  payment: boolean = false;
  postpurchase: boolean = false;
  user = new Test();
  transactionid: number = 0;
  currentuser: any;



  constructor(private router: Router) {

  }

  ngOnInit(): void {
    console.log(this.register)
    this.currentuser = this.readlocalStorageValue('user.username');
    console.log("localstorage", this.currentuser)
    this.user = JSON.parse(localStorage.getItem('currentuser')! || '{}') as Test;
  }

  logout() {
    localStorage.removeItem('currentuser')
    this.editprofile = false;
    this.showlogout = false;
    this.homepage = true;
    this.router.navigateByUrl('homepage')
  }

  readlocalStorageValue(key: any) {
    return localStorage.getItem(key);
  }
}





