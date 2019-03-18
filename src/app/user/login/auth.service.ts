import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:3000/auth';

    constructor(private http: HttpClient) { }
}