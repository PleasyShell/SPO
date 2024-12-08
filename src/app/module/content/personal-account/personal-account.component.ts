import { Component } from '@angular/core';
import { PersonalAccountService } from './service';
import { TStudent } from './type';

@Component({
    selector: 'app-personal-account',
    templateUrl: './personal-account.component.html',
    styleUrls: ['./personal-account.component.scss']
})
export class PersonalAccountComponent {


    constructor(
        private personalAccountService: PersonalAccountService
    ) { }


    protected getAllStudents(): TStudent[] {

        return this.personalAccountService.getStudents();
    };

};
