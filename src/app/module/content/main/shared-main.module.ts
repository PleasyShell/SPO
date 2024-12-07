import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    DurationPipe, MainComponent, MainModalComponent,
    MainModalService, MainService, RoutingMainModule
} from '.';


@NgModule({
    declarations: [
        MainComponent,
        MainModalComponent,
        DurationPipe
    ],
    imports: [
        CommonModule,
        RoutingMainModule,
        
    ],
    providers: [MainService, MainModalService]
})

export class SharedMainModule { }
