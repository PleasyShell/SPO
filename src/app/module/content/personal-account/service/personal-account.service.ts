import { Injectable } from '@angular/core';
import { TStudent } from '../type';

@Injectable()

export class PersonalAccountService {


    private students: TStudent[] = [];

    private firstNames: string[] = ['Александр', 'Максим', 'Дмитрий', 'Иван', 'Сергей', 'Анастасия', 'Екатерина', 'Мария', 'Ольга', 'Татьяна'];
    private lastNames: string[] = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Зайцев', 'Морозов', 'Лебедев', 'Ковалев'];
    private middleNames: string[] = ['Александрович', 'Максимович', 'Дмитриевич', 'Иванович', 'Сергеевич', 'Анастасиевна', 'Екатерининна', 'Мариевна', 'Ольговна', 'Татьяновна'];


    constructor(

    ) {
        this.generateStudents();
    };


    public getStudents(): TStudent[] {

        return this.students;
    };


    private generateStudents() {
        for (let i = 1; i <= 100; i++) {
            this.students.push({
                Id: i,
                LastName: this.getRandomLastName(),
                FirstName: this.getRandomFirstName(),
                MiddleName: this.getRandomMiddleName(),
                Performance: this.getRandomPerformance(),
                AdmissionDate: this.getRandomDate()
            });
        };
    };

    private getRandomFirstName(): string {

        return this.firstNames[Math.floor(Math.random() * this.firstNames.length)];
    };

    private getRandomLastName(): string {

        return this.lastNames[Math.floor(Math.random() * this.lastNames.length)];
    };

    private getRandomMiddleName(): string {

        return this.middleNames[Math.floor(Math.random() * this.middleNames.length)];
    };

    private getRandomPerformance(): string {

        const performances = ['Отлично', 'Хорошо', 'Удовлетворительно', 'Неудовлетворительно'];
        return performances[Math.floor(Math.random() * performances.length)];
    };

    private getRandomDate(): string {

        const start = new Date(2020, 0, 1);
        const end = new Date();
        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        return date.toLocaleDateString('ru-RU');
    };
};
