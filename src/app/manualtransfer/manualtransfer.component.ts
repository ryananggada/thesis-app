import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { Transactions } from '../models/posttransaction';
import { Details } from '../models/transdetails';
import { PostpurchaseService } from '../services/postpurchase.service';

@Component({
  selector: 'app-manualtransfer',
  templateUrl: './manualtransfer.component.html',
  styleUrls: ['./manualtransfer.component.scss']
})
export class ManualtransferComponent implements OnInit {
  transactions = new Transactions()
  details: Details[] = []
  constructor(private router: Router, private postpurchaseservice: PostpurchaseService, private appcomponent: AppComponent) { }

  ngOnInit(): void {
    this.transactiondetail(this.appcomponent.transactionid)
  }

  transactiondetail(id: number) {
    this.postpurchaseservice.transactiondetail(id).subscribe(
      data => {
        this.details = data.detail;
        this.transactions = data.transaction
      }
    )
  }

  navigatetopostpurchase() {
    this.router.navigateByUrl('postpurchase')
  }
}
