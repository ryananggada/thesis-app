import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppComponent } from '../app.component';
import { CreditCard } from '../models/creditcard';


@Component({
  selector: 'app-paymentpage',
  templateUrl: './paymentpage.component.html',
  styleUrls: ['./paymentpage.component.scss']
})
export class PaymentpageComponent implements OnInit {
  creditcard = true;

  constructor(private appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.appcomponent.showlogin = false;
  }

  creditcardbutton() {
    this.creditcard = true;
  }

  qrcodebutton() {
    this.creditcard = false;
  }

}

