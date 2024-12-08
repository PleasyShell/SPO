import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInstitutePodheaderModule } from '../../component/institute-podheader';
import { RoutingFeedbackModule } from './routing-feedback.module';
import { FeedbackComponent } from './feedback.component';


@NgModule({
    declarations: [
        FeedbackComponent
    ],
    imports: [
        CommonModule,
        SharedInstitutePodheaderModule,
        RoutingFeedbackModule
    ],
})

export class SharedFeedbackModule { }
