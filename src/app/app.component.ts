import { AfterContentChecked, ChangeDetectorRef, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './module/animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [routerTransition]
})

export class AppComponent implements AfterContentChecked {


    constructor(
        private cdref: ChangeDetectorRef
    ) { }


    public ngAfterContentChecked(): void {
     
        this.cdref.detectChanges();
    };


    protected getState(outlet: RouterOutlet) {

        return outlet.activatedRouteData['state'];
    };
};
