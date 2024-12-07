import { Injectable } from '@angular/core';
import {
    initModalSubjectContent, TModalSubjectContent,
    TSubjectContent
} from '..';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class MainModalService {

    private content: TSubjectContent[] = [
        {
            Id: 1,
            Type: 'ai',
            Text: 'Инженерия систем искусственного интеллекта',
            BudgetPlaces: 10,
            DurationOfTraining: 5,
            CostPerYear: 210000,
            Description: '',
        },
        {
            Id: 2,
            Type: 'bio',
            Text: 'Биомедицинские технологии и биоинженерия',
            BudgetPlaces: 31,
            DurationOfTraining: 4,
            CostPerYear: 400000,
            Description: '',
        },
        {
            Id: 3,
            Type: 'sint',
            Text: 'Инженерия синтетических организмов',
            BudgetPlaces: 5,
            DurationOfTraining: 2,
            CostPerYear: 380000,
            Description: '',
        },
        {
            Id: 4,
            Type: 'robo',
            Text: 'Инженерия робототехнических систем',
            BudgetPlaces: 14,
            DurationOfTraining: 6,
            CostPerYear: 300000,
            Description: '',
        },
        {
            Id: 5,
            Type: 'rad-x',
            Text: 'Инженерия ядерных реакторов',
            BudgetPlaces: 7,
            DurationOfTraining: 7,
            CostPerYear: 600000,
            Description: '',
        },
        {
            Id: 6,
            Type: 'vre',
            Text: 'Генетическая инженерия',
            BudgetPlaces: 12,
            DurationOfTraining: 9,
            CostPerYear: 800000,
            Description: '',
        },
    ];

    private modal: TModalSubjectContent = initModalSubjectContent();


    constructor(
        private http: HttpClient
    ) { }


    public getModalData(): TModalSubjectContent {

        return this.modal;
    };

    public openModal(id: number, file: string): void {

        if (id) {
            const item = this.content.find(c => c.Id === id);

            if (item) {
                this.modal = {
                    isOpen: true,
                    Content: {
                        Id: item.Id,
                        Type: item.Type,
                        Text: item.Text,
                        BudgetPlaces: item.BudgetPlaces,
                        DurationOfTraining: item.DurationOfTraining,
                        CostPerYear: item.CostPerYear,
                        Description: `${this.setDescriptionFromFile(file)}`,
                    }
                };
            };
        };
    };

    public closeModal() {

        this.modal = initModalSubjectContent();
    };


    private getTextFromFile(txt: string): Observable<string> {

        return this.http.get(txt, { responseType: 'text' });
    };

    private setDescriptionFromFile(file: string) {

        this.getTextFromFile(file).subscribe(
            (text) => {
                this.modal.Content.Description = text;
            },
            (error) => {
                console.error('Error file', error);
            }
        );
    };
};
