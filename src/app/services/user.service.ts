import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private token :String ;
  private apiUrl = "http://localhost:8083/snehal-authentication/auth"

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.get<Map<String, String>>(`${this.apiUrl}/login?username=${username}&password=${password}`)
    .pipe(map(response => {
      this.token=response['token']
      return this.token;
    }))
  }


}
