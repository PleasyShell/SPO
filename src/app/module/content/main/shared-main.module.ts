import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MainComponent, MainService,
    RoutingMainModule
} from '.';


@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RoutingMainModule
    ],
    exports: [
        MainComponent
    ],
    providers: [MainService]
})

export class SharedMainModule { }
