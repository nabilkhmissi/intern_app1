import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { IndexComponent } from "./index/index.component";

@NgModule({
    declarations : [IndexComponent],
    imports : [RouterModule.forChild([
        {
            path : '',
            component : IndexComponent 
        },
    ]),
    CommonModule,
    SharedModule
],
    exports : [IndexComponent],
    providers : []
})
export class EncadrantModule{}