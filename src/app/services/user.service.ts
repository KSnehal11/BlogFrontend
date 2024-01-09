import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  private apiUrl = "http://localhost:3000"

  register(user : any) : Observable<any> {
    return this.http.post(`${this.apiUrl}/users`,user);
  }

  login(username :string , password : string) : Observable<any> {
    return this.http.get(`${this.apiUrl}/users?email=${username}&password=${password}`)
  }
}
