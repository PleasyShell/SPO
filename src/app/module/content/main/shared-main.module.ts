import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent, RoutingMainModule } from '.';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule,
        RoutingMainModule
    ],
    exports: [
        MainComponent
    ],
    providers: []
})

export class SharedMainModule { }
