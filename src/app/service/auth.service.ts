import { User } from '../model/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../app.api';


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  constructor(private http: HttpClient){}

  login(values: {email: string, password: string}) {
    return this.http.get<User[]>(`${API}/users?email_like=` + values.email)
  }




  clear() {
    localStorage.clear()
  }

  isAuthenticated() {
   return (localStorage.getItem('users') !== null ? true : false)
  }

  logout() {
    this.clear()
  }

  cadastrar(user: User) {
    return this.http.post<User>(`${API}/users`,user)
  }

  nome(values: {name: string}){
      
    return  this.http.get<User[]>(`${API}/users?name_like=` + values.name)
  }


}
