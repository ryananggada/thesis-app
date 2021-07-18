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
  qrcode = true;
  manualtransfer = true;

  constructor(private appcomponent: AppComponent) {
    this.appcomponent.payment = true;
  }

  ngOnInit(): void {
    this.appcomponent.showlogin = false;
  }

  creditcardbutton() {
    this.creditcard = true;
    this.qrcode = false;
    this.manualtransfer = false;
  }

  qrcodebutton() {
    this.creditcard = false;
    this.qrcode = true;
    this.manualtransfer = false;
  }

  manualtransferbutton() {
    this.manualtransfer = true;
    this.creditcard = false;
    this.qrcode = false;
  }
}

