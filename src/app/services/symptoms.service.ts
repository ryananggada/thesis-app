import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Symptoms } from '../models/symptom';

@Injectable({
  providedIn: 'root'
})
export class SymptomsService {

  constructor(private _http: HttpClient) { }

  public symptomfiltering(): Observable<any> {
    return this._http.get<any>("/api/symptom");
  }
}
