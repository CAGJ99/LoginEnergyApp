import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoaderComponent } from './components/loader/loader.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker'
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { NgSelectModule } from '@ng-select/ng-select';
import { ModalComponent } from './components/modal/modal.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DistribuitorCardComponent } from './components/distribuitor-card/distribuitor-card.component';
import { CoreModule } from '../core/core.module';

import { ToastrModule } from 'ngx-toastr';





@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    CarouselComponent,
    ModalComponent,
    DistribuitorCardComponent,

  ],
  imports: [
    CommonModule,
    TabsModule,
    BsDatepickerModule.forRoot(),
    NgxSkeletonLoaderModule.forRoot(),
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    PaginationModule,
    RouterModule,
    NgSelectModule,
    CoreModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    LoaderComponent,
    PaginationModule,
    TabsModule,
    BsDatepickerModule,
    NgxSkeletonLoaderModule,
    CarouselComponent,
    NgSelectModule,
    ModalComponent,
    DistribuitorCardComponent

    
  ]
})
export class SharedModule { }
