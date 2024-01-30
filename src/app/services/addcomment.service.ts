import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddcommentService {

  private apiUrl = 'http://localhost:8083/snehal-dashboard/dashboard';

  constructor(private http : HttpClient) { }

  
  getAllComments(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/dashboard/getComment/{vId}`);
  }

  addComment(comment: { author: string; text: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/dashboard/addComments/{vId}`, comment);
  }
}
