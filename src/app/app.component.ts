import {
    AfterContentChecked, AfterViewInit,
    ChangeDetectorRef, Component, ElementRef, ViewChild
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { routerTransition } from './module/animation';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    animations: [routerTransition]
})

export class AppComponent implements AfterViewInit, AfterContentChecked {


    @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;


    constructor(
        private cdref: ChangeDetectorRef
    ) { }


    public ngAfterViewInit(): void {

        this.play();
    };

    public ngAfterContentChecked(): void {

        this.cdref.detectChanges();
    };

    protected getState(outlet: RouterOutlet) {

        return outlet.activatedRouteData['state'];
    };

    protected play(): void {

        if (this.audioPlayer && this.audioPlayer.nativeElement) {
            this.audioPlayer.nativeElement.play();
        };
    };

    protected pause(): void {

        if (this.audioPlayer && this.audioPlayer.nativeElement) {
            this.audioPlayer.nativeElement.pause();
        };
    };
};
