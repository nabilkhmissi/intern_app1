import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../models/api-response";
import { AuthResponse } from "../models/auth-response";

@Injectable()
export class AuthService {


    readonly baseUrl = `${environment.baseUrl}/auth`;
    readonly INTERN_APP_USER = "INTER_APP_USER";

    private loggedUserSubject = new BehaviorSubject<any | null>(null);
    setLoggedUser(user : any){
        this.loggedUserSubject.next(user);
    }

    getLoggedUser(){
        return this.loggedUserSubject.getValue();
    }

    constructor(private _http : HttpClient){}


    login(email : string, password : string){
        return this._http.post<ApiResponse<AuthResponse>>(`${this.baseUrl}/login`, { email, password })
    }   

    
    register(new_user : any){
        return this._http.post(`${this.baseUrl}/register`, new_user)
    }   


    saveLoginToLS(payload : any){
        localStorage.setItem(this.INTERN_APP_USER, payload)
    }

    performLogin(payload : AuthResponse){
        this.setLoggedUser(payload);
        this.saveLoginToLS(payload);
    }

    autoConnect(){
        const data = localStorage.getItem(this.INTERN_APP_USER);
        if(!data){
            return;
        }
        const user = JSON.parse(data);
        this.setLoggedUser(user);
    }

    logout(){
        localStorage.removeItem(this.INTERN_APP_USER);
        this.setLoggedUser(null);
    }

}