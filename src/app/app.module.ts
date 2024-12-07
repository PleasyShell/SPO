import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedNavModule } from './module/component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NoticeService } from './module/component/notice';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedNavModule
    ],
    providers: [NoticeService],
    bootstrap: [AppComponent]
})

export class AppModule { }
