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

  getObservation(id):Observable<Observation> { return this.http.get<Observation>(`${this.url}/${id}`); }

  postObservation(observation):Observable<Observation> { 
    return this.http.post<Observation>(this.url, observation); 
  }

  editObservation(observation):Observable<Observation> { 
    return this.http.put<Observation>(`${this.url}/${observation._id}`, observation); 
  }

  postPhotos(observationId: string, files):Observable<any> { 
    const token = localStorage.getItem('jwt-token');
    const headers = new HttpHeaders().set('x-auth-token', token);
    var formData: FormData = new FormData();
    for (var i = 0; i < files.length; i++) formData.append('photos', files[i]);
        
    return this.http.post(`${this.url}/${observationId}/pics`, formData, { headers: headers, responseType: 'text'});
  }

  getPhotoSrc(observation: Observation) {
    if(observation && observation.photoPath) return `http://localhost:3000/${observation.photoPath}`;
    return '../../../assets/swans.jpg';
  }
  
  removeObservation(observation) {
    return this.http.delete(`${this.url}/${observation._id}`, { responseType: 'text' });
  }
}
