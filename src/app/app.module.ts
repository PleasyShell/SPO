import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './module/component/nav/nav.component';
import { SharedNavModule } from './module/component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedNavModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
