import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })

export class DurationPipe implements PipeTransform {

    public transform(value: number): string {

        if (value === 1) {
            return '1 год';
        } else if (value > 1 && value < 5) {
            return `${value} года`;
        } else {
            return `${value} лет`;
        }
    };
};
