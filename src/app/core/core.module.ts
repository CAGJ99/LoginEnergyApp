import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorSrcImgDirective } from './directives/error-src-img.directive';
import { NoImagePipe } from './pipes/no-image.pipe';



@NgModule({
  declarations: [
    NoImagePipe,
    ErrorSrcImgDirective
  ],
  imports: [
    CommonModule
  ],exports:[
    NoImagePipe,
    ErrorSrcImgDirective
  ]
})
export class CoreModule { }
