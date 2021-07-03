import { AfterViewInit, Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { ItemList } from '../models/itemlist';
import { Product } from '../models/product';
import { ShoppingCart } from '../models/shoppingcart';
import { ShoppingCartList } from '../models/shoppingcartlist';
import { Test } from '../models/test';
import { TransactionDetails } from '../models/transactiondetail';
import { ProductlistComponent } from '../productlist/productlist.component';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { TransactionService } from '../services/transaction.service';

@Injectable()
export class ShoppingList { public products!: Product[]; }

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit, AfterViewInit {
  productlist: Product[] = [];
  productname = "";
  shoppingcart: ShoppingCartList[] = [];
  total = 0;
  response = ""
  listitem: ItemList[] = []
  user: any
  transactiondetail: TransactionDetails[] = []
  currentuser: any;

  constructor(private shoppinglist: ShoppingList, private appcomponent: AppComponent, private router: Router, private Shoppingcartservice: ShoppingcartService, private transactionservice: TransactionService) {
    this.appcomponent.shoppingcart = true;
    this.appcomponent.productlist = false;
    this.appcomponent.showlogin = false;
  }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
    this.user = this.currentuser.user
    this.getshoppingcartbyuserid();
  }

  showproduct() {
    for (let index = 0; index < this.shoppingcart.length; index++) {
      if (this.shoppingcart[index].medicine!.quantity === undefined) {
        this.shoppingcart[index].medicine!.quantity = 1
        this.shoppingcart[index].medicine!.subtotal = this.shoppingcart[index].medicine!.price;
      }
      this.total = this.total + this.shoppingcart[index].medicine!.subtotal!;
    }
  }

  changevalue(quantity: number, i: number) {
    console.log(quantity, i)
    let subtotal = 0
    let price = this.shoppingcart[i].medicine!.price!
    subtotal = price * quantity
    console.log(subtotal)
    this.shoppingcart[i].medicine!.subtotal = subtotal
    this.total = 0
    for (let index = 0; index < this.shoppingcart.length; index++) {
      this.total = this.total + this.shoppingcart[index].medicine!.subtotal!;
    }
  }

  addtoproductlist(product: { name: "", price: 0, description: "", image_url: "" }) {
    this.productlist.push(product)
  }

  deleteproduct(shoppingcartid: number) {
    this.Shoppingcartservice.deleteshoppingcartbyid(shoppingcartid).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        alert("Item successfully removed from Cart!")
        this.router.navigateByUrl('shoppingcart');
      },
      error => {
        alert("Error!");
      }
    )
  }

  transaction() {
    for (let index = 0; index < this.shoppingcart.length; index++) {
      const details = new TransactionDetails
      details.medicine = this.shoppingcart[index].medicine?.id;
      details.subtotal = this.shoppingcart[index].medicine?.subtotal
      this.transactiondetail.push(details)
    }
    this.transactionservice.transaction(this.user.id!, this.total, new Date(), this.transactiondetail).subscribe(
      data => {
        this.appcomponent.transactionid = data.transaction_id
        this.router.navigateByUrl('payment')
      },
      error => {
        alert("Cannot create transaction!")
      }
    )
  }

  getshoppingcartbyuserid() {
    const items: ItemList[] = []
    this.Shoppingcartservice.shoppingcartbyid(this.user.id!).subscribe(
      data => {
        console.log("Get response")
        this.listitem = data;
        for (let index = 0; index < this.listitem.length; index++) {
          items.push(this.listitem[index])
        }
        this.shoppingcart = items;
        this.showproduct();
      },
      error => {
        alert("Cannot find shopping cart by user id")
      }
    )
  }
}


