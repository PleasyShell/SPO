import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '.';

const routes: Routes =
    [
        { path: '', component: MainComponent, data: { state: 'main' } }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingMainModule { }