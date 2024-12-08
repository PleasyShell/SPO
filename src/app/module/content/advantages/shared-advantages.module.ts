import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvantagesComponent } from './advantages.component';
import { RoutingAdvantagesModule } from './routing-advantages.module';
import { SharedInstitutePodheaderModule } from '../../component/institute-podheader';
import { AdvantagesService } from './service/advantages.service';


@NgModule({
    declarations: [
        AdvantagesComponent
    ],
    imports: [
        CommonModule,
        RoutingAdvantagesModule,
        SharedInstitutePodheaderModule
    ],
    providers: [AdvantagesService]
})

export class SharedAdvantagesModule { }
