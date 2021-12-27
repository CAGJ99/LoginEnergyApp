import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { SharedModule } from '../shared/shared.module';
import { ReportsTableComponent } from './components/reports-table/reports-table.component';
import { FormReportsComponent } from './components/form-reports/form-reports.component';


@NgModule({
  declarations: [
    ReportsComponent,
    ReportsTableComponent,
    FormReportsComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports:[
    ReportsComponent
  ]
})
export class ReportsModule { }
