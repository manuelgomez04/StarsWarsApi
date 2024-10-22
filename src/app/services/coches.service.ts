import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CocheListResponse } from '../interfaces/coches.interfaces';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private http: HttpClient) { 

  }

  getCochesList(): Observable<CocheListResponse> {
    return this.http.get<any>('https://swapi.dev/api/vehicles');
  }
}