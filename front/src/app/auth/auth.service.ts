import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { ApiResponse } from "../models/api-response";
import { AuthResponse } from "../models/auth-response";
import { Router } from "@angular/router";

@Injectable()
export class AuthService {


    readonly baseUrl = `${environment.baseUrl}/auth`;
    readonly INTERN_APP_USER = "INTER_APP_USER";

    constructor(private _http : HttpClient, private _router : Router){}

    private loggedUserSubject = new BehaviorSubject<any | null>(null);
    setLoggedUser(user : any){
        this.loggedUserSubject.next(user);
    }

    getLoggedUser(){
        return this.loggedUserSubject.getValue();
    }



    login(email : string, password : string){
        return this._http.post<ApiResponse<AuthResponse>>(`${this.baseUrl}/login`, { email, password }).pipe(
            tap(res=>this.performLogin(res.data))
        )
    }   

    
    register(new_user : any){
        return this._http.post(`${this.baseUrl}/register`, new_user)
    }   


    saveLoginToLS(payload : any){
        localStorage.setItem(this.INTERN_APP_USER, JSON.stringify(payload))
    }

    performLogin(payload : AuthResponse){
        this.setLoggedUser(payload);
        this.saveLoginToLS(payload);
    }

    redirect(role : string){
        if(role == "ADMIN"){
          this._router.navigateByUrl("/admin")
        }
        if(role == "ASSISTANT"){
          this._router.navigateByUrl("/assistant")
        }
        if(role == "STAGIAIRE"){
          this._router.navigateByUrl("/stagiaire")
        }
        if(role == "ENCADRABT"){
          this._router.navigateByUrl("/encadrant")
        }
        if(!role){
            this._router.navigateByUrl("")
        }
    }

    autoConnect(){
        const data = localStorage.getItem(this.INTERN_APP_USER);
        if(!data){
            this.redirect(null);
            return;
        }
        const user = JSON.parse(data) as AuthResponse;
        this.setLoggedUser(user);
        this.redirect(user.role);
    }

    logout(){
        localStorage.removeItem(this.INTERN_APP_USER);
        this.setLoggedUser(null);
    }

}