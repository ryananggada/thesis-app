import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingcartService {

  constructor(private _http: HttpClient) { }

  public shoppingcart(user_id: number, medicine_id: number): Observable<any> {
    return this._http.post<any>("/api/shoppingcart/add", { user_id, medicine_id });
  }

  public shoppingcartbyid(user_id: number): Observable<any> {
    return this._http.get<any>("/api/shoppingcart/user/" + user_id);
  }

  public deleteshoppingcartbyid(shoppingcartid: number): Observable<any> {
    return this._http.delete<any>("/api/shoppingcart/" + shoppingcartid);
  }
}
