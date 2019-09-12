import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from './comment.model';
import { ObservationComment } from './observationComment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private url = 'http://localhost:3000/comments';

  constructor(private http: HttpClient) { }

  getObservationComment(commentId: String):Observable<ObservationComment> {
    return this.http.get<ObservationComment>(`${this.url}/${commentId}`);
  }

  getObservationComments(observationId: String):Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.url}/search?observationId=${observationId}`);
  }

  postObservationComment(newComment):Observable<ObservationComment> {
    return this.http.post<any>(`${this.url}`, newComment);
  }

  updateObservationComment(id: String, updatedText: String):Observable<ObservationComment> {
    return this.http.put<any>(`${this.url}/${id}`, { text: updatedText});
  }

  deleteObservationComment(id: String):Observable<ObservationComment> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
