import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreditCard } from '../models/creditcard';


export interface DialogCreditCard {
  cardowner: string;
  cardnumber: string;
  MM: string;
  YY: number;
}
@Component({
  selector: 'app-creditcard',
  templateUrl: './creditcard.component.html',
  styleUrls: ['./creditcard.component.scss']
})
export class CreditcardComponent implements OnInit {
  creditcard = new CreditCard();

  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogPaymentDetail, {
      data: { cardnumber: this.creditcard.cardnumber, cardowner: this.creditcard.cardowner, MM: this.creditcard.MM, YY: this.creditcard.YY }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.router.navigateByUrl('postpurchase')
    });
  }
}
@Component({
  selector: 'dialog-payment-detail',
  templateUrl: 'dialog-payment-detail.html',
})
export class DialogPaymentDetail {
  constructor(public dialogref: MatDialogRef<DialogPaymentDetail>,
    @Inject(MAT_DIALOG_DATA) public data: DialogCreditCard) { }
}






