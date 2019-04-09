import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginData } from './loginData.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private url = 'http://localhost:3000/auth';
    private isLogged: boolean = false;

    constructor(private http: HttpClient) { 
        this.checkToken();
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

    checkToken(): void {
        const token = localStorage.getItem('jwt-token');
        if(token) {
            this.http.get(this.url + '/' + token, { responseType: 'text' }).subscribe(() => {
                this.isLogged = true;
            });
        }
    }
}