import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Transactions } from '../models/posttransaction';
import { ShoppingCart } from '../models/shoppingcart';
import { Test } from '../models/test';
import { TransactionDetails } from '../models/transactiondetail';
import { Details } from '../models/transdetails';
import { PostpurchaseService } from '../services/postpurchase.service';

@Component({
  selector: 'app-postpurchase',
  templateUrl: './postpurchase.component.html',
  styleUrls: ['./postpurchase.component.scss']
})
export class PostpurchaseComponent implements OnInit {
  user: any;
  response = ""
  transactions = new Transactions()
  transaction: TransactionDetails[] = []
  cart: ShoppingCart[] = []
  shoppingcart: any;
  transactiondets = new Details()
  details: Details[] = []


  constructor(private router: Router, private appcomponent: AppComponent, private postpurchaseservice: PostpurchaseService) {
    this.appcomponent.showlogin = false;
    this.appcomponent.postpurchase = true;
  }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
    console.log(this.user)
    this.transactiondetail(this.appcomponent.transactionid)
  }

  transactiondetail(id: number) {
    this.postpurchaseservice.transactiondetail(id).subscribe(
      data => {
        this.details = data.detail;
        this.transactions = data.transaction
        alert("Successfully retrieved transaction detail by transaction id")
      },
      error => {
        alert("Failed to retrieve transaction detail by transaction id")
      }
    )
  }

  navigatetosymptom() {
    this.router.navigateByUrl('symptomfiltering')
  }

}
