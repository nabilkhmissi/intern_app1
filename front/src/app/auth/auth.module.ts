import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AuthService } from "./auth.service";
import LoginComponent from "./login/login.component";
import RegisterComponent from "./register/register.component";
import { SharedModule } from "../theme/shared/shared.module";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports : [
        FormsModule,
        RouterModule.forChild([
        { path : '', redirectTo : 'login', pathMatch : "full" },
        { path : 'login', component : LoginComponent },
        { path : 'register', component : RegisterComponent },
    ]),
    SharedModule
    ],
    exports : [RouterModule],
    declarations : [LoginComponent, RegisterComponent],
    providers : [AuthService]
})
export class AuthModule {}