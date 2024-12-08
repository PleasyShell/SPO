import { Injectable } from '@angular/core';
import { TAdvantages } from '../type/advantages.type';

@Injectable()

export class AdvantagesService {


    private cards: TAdvantages[] = [
        {
            Id: 1,
            Text: 'Адаптация'
        },
        {
            Id: 2,
            Text: 'Cтипендия'
        },
        {
            Id: 3,
            Text: 'Общежитие'
        },
        {
            Id: 4,
            Text: 'Карьера'
        },
        {
            Id: 5,
            Text: 'Военный учебный центр'
        },
        {
            Id: 6,
            Text: 'Студенческая жизнь'
        },
    ];


    constructor(

    ) { }


    public getAllCards(): TAdvantages[] {

        return this.cards;
    };
};
