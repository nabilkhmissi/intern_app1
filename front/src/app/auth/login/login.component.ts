// angular import
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent implements OnInit{

  constructor(private _auth : AuthService, private _router : Router){}

  email  = "";
  password = "";

  ngOnInit(): void {
    
  }

  login(){
    this._auth.login(this.email, this.password).subscribe(
      res => {
        this._auth.performLogin(res.data)
        if(res.data.role == "ADMIN"){
          this._router.navigateByUrl("/admin")
        }
        if(res.data.role == "ASSISTANT"){
          this._router.navigateByUrl("/assistant")
        }
        if(res.data.role == "STAGIAIRE"){
          this._router.navigateByUrl("/stagiaire")
        }
        if(res.data.role == "ENCADRABT"){
          this._router.navigateByUrl("/encadrant")
        }
      }
    )
  }



  // public method
  SignInOptions = [
    {
      image: 'assets/images/authentication/google.svg',
      name: 'Google'
    },
    {
      image: 'assets/images/authentication/twitter.svg',
      name: 'Twitter'
    },
    {
      image: 'assets/images/authentication/facebook.svg',
      name: 'Facebook'
    }
  ];
}
