import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  constructor(private http: HttpClient) { 

  }

  getCochesList(): Observable<any> {
    return this.http.get<any>('https://swapi.dev/api/vehicles');
  }
}