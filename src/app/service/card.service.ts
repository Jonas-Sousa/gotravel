import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../model/card.model';
import { Observable } from 'rxjs';
import { API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {}

  getLista(): Observable<Card[]> {
    return this.http.get<Card[]>(`${API}/fotos`)
  }


}
