import { NgModule } from "@angular/core";
import { MainComponent } from "./main/main.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
    declarations : [MainComponent],
    imports : [RouterModule.forChild([
        {
            path : '',
            component : MainComponent
        },
    ]),
    CommonModule,
    SharedModule
],
    exports : [MainComponent],
    providers : []
})
export class AdminModule{}