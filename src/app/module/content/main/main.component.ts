import { Component } from '@angular/core';
import { MainService } from './service/main.service';
import { TSubject } from './type/subject.type';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})

export class MainComponent {


    constructor(
        private mainService: MainService
    ) { }


    protected getAllSubjects(): TSubject[] {

        return this.mainService.getAllSubjects();
    };

    protected openModal(item: TSubject): void {

        this.mainService.openModal(item);
    };
};
