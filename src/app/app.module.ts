import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNavModule } from './module/component';
import { MainComponent } from './module/content/main/main.component';
import { AdmissionGuideComponent } from './module/content/admission-guide/admission-guide.component';
import { AdvantagesComponent } from './module/content/advantages/advantages.component';
import { ContactsComponent } from './module/content/contacts/contacts.component';
import { FeedbackComponent } from './module/content/feedback/feedback.component';
import { FaqComponent } from './module/content/faq/faq.component';

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        AdmissionGuideComponent,
        AdvantagesComponent,
        ContactsComponent,
        FeedbackComponent,
        FaqComponent
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
