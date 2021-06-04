import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private _http: HttpClient) { }
  //function for hitting API for register//
  public register(user: Test): Observable<any> {
    return this._http.post<any>("/api/user/register", user);
  }
}
