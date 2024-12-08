import { Injectable } from '@angular/core';
import { TSubject } from '../type';

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
            File: 'assets/bio.txt',
            Text: 'Биомедицинские технологии и биоинженерия'
        },
        {
            Id: 3,
            Type: 'sint',
            File: 'assets/sint.txt',
            Text: 'Инженерия синтетических организмов'
        },
        {
            Id: 4,
            Type: 'robo',
            File: 'assets/robo.txt',
            Text: 'Инженерия робототехнических систем'
        },
        {
            Id: 5,
            Type: 'rad-x',
            File: 'assets/rad-x.txt',
            Text: 'Инженерия ядерных реакторов'
        },
        {
            Id: 6,
            Type: 'vre',
            File: 'assets/vre.txt',
            Text: 'Генетическая инженерия'
        }
    ];


    constructor(

    ) { }


    public getAllSubjects(): TSubject[] {

        return this.subjects;
    };
};
