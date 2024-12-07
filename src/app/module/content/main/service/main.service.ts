import { Injectable } from '@angular/core';
import { TSubject } from '..';

@Injectable()

export class MainService {


    private subjects: TSubject[] = [
        {
            Id: 1,
            Type: 'ai',
            File: 'assets/ai.txt',
            Text: 'Инженерия систем искусственного интеллекта'
        },
        {
            Id: 2,
            Type: 'bio',
            File: 'assets/ai.txt',
            Text: 'Биомедицинские технологии и биоинженерия'
        },
        {
            Id: 3,
            Type: 'sint',
            File: 'assets/ai.txt',
            Text: 'Инженерия синтетических организмов'
        },
        {
            Id: 4,
            Type: 'robo',
            File: 'assets/ai.txt',
            Text: 'Инженерия робототехнических систем'
        },
        {
            Id: 5,
            Type: 'rad-x',
            File: 'assets/ai.txt',
            Text: 'Инженерия ядерных реакторов'
        },
        {
            Id: 6,
            Type: 'vre',
            File: 'assets/ai.txt',
            Text: 'Генетическая инженерия'
        }
    ];


    constructor(

    ) { }


    public getAllSubjects(): TSubject[] {

        return this.subjects;
    };
};