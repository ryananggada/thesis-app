import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Test } from './models/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tong-fang';
  register: boolean = false;
  symptomfiltering: boolean = false;
  showlogin: boolean = true;
  productlist: boolean = false;
  shoppingcart: boolean = false;
  postpurchase: boolean = false;
  user = new Test();
  transactionid: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.register)
    // this.user = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
  }

  logout() {
    localStorage.removeItem('currentuser')
    this.router.navigateByUrl('homepage')
  }
}





