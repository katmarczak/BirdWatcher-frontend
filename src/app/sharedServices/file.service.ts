import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FileService {
    constructor(private http: HttpClient) { }

    uploadFile(data: FormData, url: string): Observable<any> {
        url = `http://localhost:3000${url}`;
        return this.http.post(url, data, { responseType: 'text' });
    }
}