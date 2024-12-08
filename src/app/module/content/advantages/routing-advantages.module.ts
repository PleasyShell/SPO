import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvantagesComponent } from './advantages.component';


const routes: Routes =
    [
        { path: '', component: AdvantagesComponent, data: { state: 'advantages' } }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingAdvantagesModule { }
