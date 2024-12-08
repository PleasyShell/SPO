import { Component } from '@angular/core';
import { openWindow } from 'src/app/module/animation';
import { MainModalService } from '../../service';
import { TModalSubjectContent } from '../../type';

@Component({
    selector: 'main-modal',
    templateUrl: './main-modal.component.html',
    animations: [openWindow]
})

export class MainModalComponent {


    constructor(
        private modalService: MainModalService
    ) { }


    protected getViewContent(): TModalSubjectContent {

        return this.modalService.getModalData();
    };

    protected closeModal() {

        this.modalService.closeModal();
    };
};
