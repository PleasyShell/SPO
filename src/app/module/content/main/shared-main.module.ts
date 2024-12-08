import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedInstitutePodheaderModule } from '../../component/institute-podheader';
import { MainModalComponent } from './component';
import { MainComponent } from './main.component';
import { RoutingMainModule } from './routing-main.module';
import { MainModalService, MainService } from './service';
import { DurationPipe } from './component/main-modal/pipe';

@NgModule({
    declarations: [
        MainComponent,
        MainModalComponent,
        DurationPipe
    ],
    imports: [
        CommonModule,
        RoutingMainModule,
        SharedInstitutePodheaderModule
    ],
    providers: [MainService, MainModalService]
})

export class SharedMainModule { }
