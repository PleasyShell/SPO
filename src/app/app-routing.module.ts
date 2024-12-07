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
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: 'admission-guide',
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: 'advantages',
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: 'contacts',
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: 'feedback',
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: 'faq',
        loadChildren: () => import('').then(m => m.)
    },
    {
        path: '**',
        redirectTo: 'main',
        pathMatch: 'full',
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
