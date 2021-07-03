import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransactionDetails } from '../models/transactiondetail';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private _http: HttpClient) { }

  public transaction(user_id: number, total: number, date: Date, transaction_detail: TransactionDetails[]): Observable<any> {
    return this._http.post<any>("/api/transaction/submit", { user_id, total, date, transaction_detail });
  }
}
