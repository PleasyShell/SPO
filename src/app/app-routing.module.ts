import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
    },
    {
        path: 'main',
        loadChildren: () => import('./module/content/main/shared-main.module').then(m => m.SharedMainModule)
    },
    {
        path: 'advantages',
        loadChildren: () => import('./module/content/advantages/shared-advantages.module').then(m => m.SharedAdvantagesModule)
    },
    {
        path: 'contacts',
        loadChildren: () => import('./module/content/contacts/shared-contacts.module').then(m => m.SharedContactsModule)
    },
    {
        path: 'feedback',
        loadChildren: () => import('./module/content/feedback/shared-feedback.module').then(m => m.SharedFeedbackModule)
    },
    // {
    //     path: 'faq',
    //     loadChildren: () => import('').then(m => m.)
    // },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
