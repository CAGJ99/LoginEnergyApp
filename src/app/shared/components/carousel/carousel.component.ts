import { Component, Input, OnInit } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ICarousel } from '../../../core/interfaces/carousel.interface';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers:[
    { provide: CarouselConfig, useValue: { interval: 3500, noPause: true, showIndicators: true } }
  ]
})
export class CarouselComponent {

  @Input() imageList: ICarousel[];
  constructor() { 
    console.log(this.imageList);
  }

}
