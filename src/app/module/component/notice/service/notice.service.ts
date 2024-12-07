import { Injectable } from "@angular/core";
import { timer } from "rxjs";
import { TNotice, uuid } from "..";


@Injectable()
export class NoticeService {


    private noticeContent: TNotice[] = [];


    public getNotice(): TNotice[] {

        return [...this.noticeContent];
    };

    public success(message: string, content?: string) {

        const noticeId = uuid();
        this.noticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'success',
            Content: content
        });

        this.timerForNotice(noticeId);
    };

    public edit(message: string, content?: string) {

        const noticeId = uuid();
        this.noticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'edit',
            Content: content
        });

        this.timerForNotice(noticeId);
    };

    public warning(message: string, content?: string) {

        const noticeId = uuid();
        this.noticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'warning',
            Content: content
        });

        this.timerForNotice(noticeId);
    };

    public delete(message: string, content?: string) {

        const noticeId = uuid();
        this.noticeContent.push({
            Id: noticeId,
            Message: message,
            Type: 'delet',
            Content: content
        });

        this.timerForNotice(noticeId);
    };


    public removeNotice(noticeId: string) {

        const index = this.noticeContent.findIndex(notice => notice.Id === noticeId);

        if (index !== -1) {
            this.noticeContent.splice(index, 1);
        };
    };


    private timerForNotice(noticeId: string) {

        timer(6000).subscribe(() => {
            this.removeNotice(noticeId);
        });
    };
};
