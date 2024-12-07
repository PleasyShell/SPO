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
        }
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
