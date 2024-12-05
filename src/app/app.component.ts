import { AfterContentChecked, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements AfterContentChecked {


    constructor(

    ) {

    };


    public ngAfterContentChecked(): void {
        
    };


    protected getState(outlet: RouterOutlet) {

        return outlet.activatedRouteData['state'];
    };
};
