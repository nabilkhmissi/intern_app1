// angular import
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent {

  email = "";
  password : "";
  comfirmPassword = "";

  firstName = "";
  lastName = "";

  fullName = `${this.firstName} ${this.lastName}`;
  phone = "";
  role =  "";
  nationality = "";
  dateOfBirth = "";
  address = "";
  department = "";
  gender = "";
  
}
