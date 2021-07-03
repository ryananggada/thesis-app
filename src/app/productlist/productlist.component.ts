import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AppComponent } from '../app.component';
import { MedicineParam } from '../models/medicineparam';
import { Product } from '../models/product';
import { Test } from '../models/test';
import { ProductlistService } from '../services/productlist.service';
import { ShoppingcartService } from '../services/shoppingcart.service';
import { ShoppingcartComponent, ShoppingList } from '../shoppingcart/shoppingcart.component';

@Injectable()
//provider inject data that can be used from the class
export class SymptomParam { public symptom!: MedicineParam; }
export interface DialogData {
  dsc: string;
}
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  products: Product[] = []
  medicineparam = new MedicineParam();
  productlist: Product[] = []
  description = ""
  response = ""
  user: any;
  currentuser: any;




  constructor(private router: Router, private productlistservice: ProductlistService, private symptomparam: SymptomParam, private shoppinglist: ShoppingList, public dialog: MatDialog, private appcomponent: AppComponent, private Shoppingcartservice: ShoppingcartService,) {
    this.appcomponent.productlist = true;
    this.appcomponent.symptomfiltering = false;
    this.appcomponent.shoppingcart = false;
    this.appcomponent.showlogin = false;
  }

  openDialog(i: number) {
    let desc = this.products[i].description
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      data: { dsc: desc }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    this.currentuser = JSON.parse(localStorage.getItem('currentuser') || '{}') as Test;
    this.user = this.currentuser.user
    this.medicineparam = this.symptomparam.symptom;
    console.log(this.medicineparam)
    this.filterproducts()

  }

  addtocart(i: number) {
    console.log(i)
    console.log(this.products[i])
    this.productlist.push(this.products[i])
    console.log(this.productlist)
    this.shoppinglist.products = this.productlist
  }

  savecart(medicine_id: number) {
    this.Shoppingcartservice.shoppingcart(this.user.id!, medicine_id).subscribe(
      data => {
        console.log("Get response")
        this.response = data;
        console.log(this.response)
        alert("Successfully added Item to Cart!")
      },
      error => {
        alert("Item Already in Shopping Cart");
      }
    )
  }

  filterproducts() {
    this.productlistservice.filterproduct(this.medicineparam).subscribe(
      data => {
        console.log("Get respond", data)
        this.products = data;
      },
      error => {
        alert("Failed to fetch data")
      }
    )
  }

  showmodal(desc: string) {
    alert(desc)
  }

  getProducts() {
    this.productlistservice.list().subscribe(
      data => {
        console.log("Get respond", data)
        this.products = data;
      },
      error => {
        alert("Failed to fetch data");
      }
    )
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {
  constructor(public dialogref: MatDialogRef<DialogContentExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
}