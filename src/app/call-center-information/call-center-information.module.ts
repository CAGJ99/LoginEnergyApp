import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallCenterInformationRoutingModule } from './call-center-information-routing.module';
import { CallCenterInformationComponent } from './call-center-information.component';
import { CallCenterFilterComponent } from './components/call-center-filter/call-center-filter.component';
import { CallCenterTableComponent } from './components/call-center-table/call-center-table.component';
import { NoImagePipe } from '../core/pipes/no-image.pipe';
import { ErrorSrcImgDirective } from '../core/directives/error-src-img.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CallCenterInformationComponent,
    CallCenterFilterComponent,
    CallCenterTableComponent,
  
  ],
  imports: [
    CommonModule,
    CallCenterInformationRoutingModule,
    SharedModule
  ]
})
export class CallCenterInformationModule { }
