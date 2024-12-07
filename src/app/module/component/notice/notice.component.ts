import { Component } from '@angular/core';
import { openWindow, notice } from '../../animation';
import { NoticeService } from '.';

@Component({
    selector: 'notice',
    templateUrl: './notice.component.html',
    styleUrls: ['./notice.component.scss'],
    animations: [openWindow, notice]
})

export class NoticeComponent {


    constructor(
        protected noticeService: NoticeService
    ) { }


    protected showNotice() {

        return this.noticeService.getNotice();
    };

    protected removeNotice(id: string) {

        this.noticeService.removeNotice(id);
    };
};
