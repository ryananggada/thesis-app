import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MedicineParam } from '../models/medicineparam';


@Injectable({
  providedIn: 'root'
})
export class ProductlistService {

  constructor(private _http: HttpClient) { }

  public list(): Observable<any> {
    return this._http.get<any>("/api/medicine");
  }

  public filterproduct(medicineparam: MedicineParam): Observable<any> {
    return this._http.post<any>("/api/medicine/check", medicineparam)
  }
}
