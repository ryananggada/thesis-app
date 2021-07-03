import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostpurchaseService {

  constructor(private _http: HttpClient) { }

  public transactiondetail(id: number): Observable<any> {
    return this._http.get<any>("/api/transaction/detail/" + id);
  }
}
