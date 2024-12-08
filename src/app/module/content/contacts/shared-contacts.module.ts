import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { ContactsComponent } from './contacts.component';
import { RoutingContactsModule } from './routing-contacts.module';
import { SharedInstitutePodheaderModule } from '../../component/institute-podheader';


@NgModule({
    declarations: [
        ContactsComponent
    ],
    imports: [
        CommonModule,
        RoutingContactsModule,
        GoogleMapsModule,
        SharedInstitutePodheaderModule
    ]
})

export class SharedContactsModule { }
