import { Injectable } from '@angular/core';
import { initModalSubjectContent, TModalSubjectContent, TSubject } from '..';


@Injectable()

export class MainService {


    private subjects: TSubject[] = [
        {
            Id: 1,
            Type: 'ai',
            Text: 'Инженерия систем искусственного интеллекта'
        },
        {
            Id: 2,
            Type: 'bio',
            Text: 'Биомедицинские технологии и биоинженерия'
        },
        {
            Id: 3,
            Type: 'sint',
            Text: 'Инженерия синтетических организмов'
        },
        {
            Id: 4,
            Type: 'robo',
            Text: 'Инженерия робототехнических систем'
        },
        {
            Id: 5,
            Type: 'rad-x',
            Text: 'Инженерия ядерных реакторов'
        },
        {
            Id: 6,
            Type: 'vre',
            Text: 'Генетическая инженерия'
        }
    ];

    private modal: TModalSubjectContent = initModalSubjectContent();


    constructor(

    ) { }


    public getAllSubjects(): TSubject[] {

        return this.subjects;
    };

    public openModal(item: TSubject): void {

        if (item) {

            this.modal = {
                isOpen: true,
                Content: {
                    Id: item.Id,
                    Type: item.Type,
                    BudgetPlaces: 0,
                    DurationOfTraining: 0,
                    CostPerYear: 0,
                    Description: '',
                }
            };
        };
    };
};
