import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '.';

@NgModule({
    declarations: [MainComponent],
    imports: [
        CommonModule
    ],
    exports: [
        MainComponent
    ],
    providers: []
})

export class SharedMainModule { }
