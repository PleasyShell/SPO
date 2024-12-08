import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutePodheaderComponent } from './institute-podheader.component';

@NgModule({
    declarations: [
        InstitutePodheaderComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [InstitutePodheaderComponent]
})

export class SharedInstitutePodheaderModule { }
