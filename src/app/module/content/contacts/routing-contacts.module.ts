import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts.component';


const routes: Routes =
    [
        { path: '', component: ContactsComponent, data: { state: 'contacts' } }
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class RoutingContactsModule { }
