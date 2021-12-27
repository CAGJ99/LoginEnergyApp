import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallCenterInformationComponent } from './call-center-information.component';

const routes: Routes = [
{path:'',  component: CallCenterInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallCenterInformationRoutingModule { }
