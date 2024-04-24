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
        this._auth.redirect(res.data.role);
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
