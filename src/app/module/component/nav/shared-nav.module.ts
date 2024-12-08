import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { NoticeService } from '../notice';

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavComponent
    ],
    providers: [NoticeService]
})

export class SharedNavModule { }
