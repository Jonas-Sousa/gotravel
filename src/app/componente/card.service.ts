import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from './card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private readonly API = 'http://localhost:3000/Fotos'

  constructor(private http: HttpClient) {}

  getLista(): Observable<Card[]> {
    return this.http.get<Card[]>(this.API)
  }


}
