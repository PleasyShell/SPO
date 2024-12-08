import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RoutingPersonalAccountModule } from "./routing-personal-account.module";
import { PersonalAccountComponent } from "./personal-account.component";
import { SharedInstitutePodheaderModule } from "../../component/institute-podheader";
import { PersonalAccountService } from "./service";


@NgModule({
    declarations: [
        PersonalAccountComponent
    ],
    imports: [
        CommonModule,
        RoutingPersonalAccountModule,
        SharedInstitutePodheaderModule
    ],
    providers: [
        PersonalAccountService
    ]
})

export class SharedPersonalAccountModule { }
