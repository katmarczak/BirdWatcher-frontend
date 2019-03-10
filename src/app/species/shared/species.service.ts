import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Species } from './species.model';

@Injectable({
  providedIn: 'root'
})
export class SpeciesService {
  private url = 'http://localhost:3000/species';

  constructor(private http: HttpClient) { }

  getSpecies():Observable<Species[]> { 
    return this.http.get<Species[]>(this.url);
  }
}
