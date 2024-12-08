import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    DurationPipe, MainComponent, MainModalComponent,
    MainModalService, MainService, RoutingMainModule
} from '.';

import { SharedInstitutePodheaderModule } from '../../component/institute-podheader';


@NgModule({
    declarations: [
        MainComponent,
        MainModalComponent,
        DurationPipe
    ],
    imports: [
        CommonModule,
        RoutingMainModule,
        SharedInstitutePodheaderModule
    ],
    providers: [MainService, MainModalService]
})

export class SharedMainModule { }
