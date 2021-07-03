import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private _http: HttpClient) { }
  public getprofile(profileid: number): Observable<any> {
    return this._http.get<any>("/api/profile/" + profileid);
  }

  public editprofile(user: Test, profileid: number): Observable<any> {
    return this._http.put<any>("/api/profile/" + profileid, user);
  }
}
