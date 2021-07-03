import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _http: HttpClient) { }

  public login(username: string, password: string): Observable<any> {
    return this._http.post<any>("/api/user/login", { username, password });
  }
}
