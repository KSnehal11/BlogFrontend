import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../model/card';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class GetpostService {

  constructor(private http: HttpClient) { }
  // const userObj: UserService = inject(UserService);

  private token: String;



  private dashboardurl = "http://localhost:8083/snehal-dashboard/dashboard"

  // getAllBlogs(token:string): Observable<any> {

  //   const headers = new HttpHeaders({
  //     'Authorization': `Bearer ${token}`
  //   });

  //   return this.http.get<List<Card>>(`${this.dashboardurl}/showBlogs` , )
  // }

  getAllBlogs(): Observable<any> {
    return this.http.get<List<Card>>(`${this.dashboardurl}/showBlogs`,)
  }



  addBlog()
}
