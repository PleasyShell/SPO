import { Component } from '@angular/core';
import { AdvantagesService } from './service';
import { TAdvantages } from './type';


@Component({
    selector: 'advantages',
    templateUrl: './advantages.component.html',
    styleUrls: ['./advantages.component.scss']
})

export class AdvantagesComponent {


    constructor(
        private advantagesService: AdvantagesService
    ) { }


    protected getAllCards(): TAdvantages[] {

        return this.advantagesService.getAllCards();
    };
};
