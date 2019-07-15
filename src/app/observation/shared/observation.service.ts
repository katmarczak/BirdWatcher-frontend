import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from './observation.model';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  private url = 'http://localhost:3000/observations';

  constructor(private http: HttpClient) { }

  getObservations():Observable<Observation[]> { return this.http.get<Observation[]>(this.url); }

  getUserObservations(userId: String):Observable<Observation[]> { 
    return this.http.get<Observation[]>(`${this.url}/search?userId=${userId}`);
   }

  getObservation(id):Observable<Observation> { return this.http.get<Observation>(this.url+'/'+id); }

  postObservation(observation):Observable<Observation> { 
    const token = localStorage.getItem('jwt-token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'x-auth-token': token
      })
    };
    return this.http.post<Observation>(this.url, observation, httpOptions); 
  }
}
