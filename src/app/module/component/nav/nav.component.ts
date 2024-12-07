import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent {


    constructor(
        private router: Router
    ) { }


    protected isActive(url: string): boolean {

        return this.router.isActive(url, true);
    };
};
