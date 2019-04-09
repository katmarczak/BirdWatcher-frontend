import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from './loginData.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:3000/auth';
    private isLogged: boolean;

    constructor(private http: HttpClient) { 

    }

    login(loginData: LoginData):Observable<string> {
        return this.http.post(this.url, loginData, { headers: new HttpHeaders({'Content-Type': 'application/json'}), responseType: 'text'});
    }

    setIsLogged(isLogged: boolean): void {
        this.isLogged = isLogged;
    }

    isUserLogged(): boolean {
        return this.isLogged;
    }
}