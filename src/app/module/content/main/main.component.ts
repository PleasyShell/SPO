import { Component } from '@angular/core';
import { MainService } from './service/main.service';
import { TSubject } from './type/subject.type';
import { MainModalService } from './service/main-modal.service';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent {


    constructor(
        private mainService: MainService,
        private modalService: MainModalService
    ) { }


    protected getAllSubjects(): TSubject[] {

        return this.mainService.getAllSubjects();
    };

    protected openModal(id: number, file: string): void {

        this.modalService.openModal(id, file);
    };
};
