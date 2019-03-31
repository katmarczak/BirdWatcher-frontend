import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Observation } from './observation.model';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {
  private url = 'http://localhost:3000/observations';

  constructor(private http: HttpClient) { }

  getObservations():Observable<Observation[]> { return this.http.get<Observation[]>(this.url); }

  getObservation(id):Observable<Observation> { return this.http.get<Observation>(this.url+'/'+id); }
}
