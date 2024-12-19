import { Component, Inject } from '@angular/core';
import { PersonalAccountService } from './service';
import { TStudent } from './type';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'app-personal-account',
    templateUrl: './personal-account.component.html',
    styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent {


    constructor(
        private personalAccountService: PersonalAccountService,
        @Inject(DOCUMENT) private document: Document
    ) { }


    protected getAllStudents(): TStudent[] {

        return this.personalAccountService.getStudents();
    };

    protected redirect() {

        this.document.location.href = 'https://asurco.ru/spo';
    };

};
