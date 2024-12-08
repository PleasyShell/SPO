import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackComponent } from './feedback.component';


const routes: Routes =
    [
        { path: '', component: FeedbackComponent, data: { state: 'feedback' } }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingFeedbackModule { }
