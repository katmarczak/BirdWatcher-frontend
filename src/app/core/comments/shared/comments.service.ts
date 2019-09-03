import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  getObservationComments(observationId: String):Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/search?observationId=${observationId}`);
  }
}
