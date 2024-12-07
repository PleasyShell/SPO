import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from '.';

@NgModule({
    declarations: [NoticeComponent],
    imports: [
        CommonModule
    ],
    exports: [NoticeComponent]
})

export class SharedNoticeModule { }
