import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnInit } from '@angular/core';
import { ILinkGovernment } from '../core/interfaces/link-government.interface';
import { MainFactoryService } from '../core/services/main-factory.service';
import { ICarousel } from '../core/interfaces/carousel.interface';
import { EnergyService } from '../services/energy.service';
import { IDistributors } from '../core/interfaces/distributors.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, DoCheck {

  linkGovermentList: ILinkGovernment[];
  carouselImageList: ICarousel[];
  listDistributors: IDistributors[];
  listOptions:any;
  distribuitorsImg:any;
  arrayPuchase:any;

  constructor(
    private mainFactory: MainFactoryService,
    private energyService: EnergyService
  ) {
    this.arrayPuchase =[];
    this.linkGovermentList = mainFactory.guvernamentImages;
    this.carouselImageList = mainFactory.carouselImages;
    this.listOptions= mainFactory.optionList;
    // this.distribuitorsImg = [
    //   { name: 'lipigas', img: 'assets/images/distributors/logo-lipigas.png',webPage:'https://lipitienda.lipigas.cl/', tipo:'compra'},
    //   { name: 'metrogas', img: 'assets/images/distributors/logo-metrogas.png' ,webPage:'http://www.metrogas.cl/', tipo:'venta'},
    //   { name: 'gasco', img: 'assets/images/distributors/logo-gasco.png',webPage:'https://gasco.cl/', tipo:'compra'},
    //   { name: 'abastible', img: 'assets/images/distributors/logo-abastible.png',webPage:'https://www.abastible.cl/', tipo:'compra'},
    //   { name: 'gas sur', img: 'assets/images/distributors/logo-gassur.png',webPage:'https://www.gassur.cl/' , tipo :'venta'},
    //   { name: 'intergas s.a.', img: 'assets/images/distributors/logo-intergas.png',webPage:'https://www.intergas.cl/', tipo:'compra'},
    //   { name: 'gasco magallanes', img: 'assets/images/distributors/logo-gascomagallanes.png',webPage:'https://www.gascomagallanes.cl/',tipo:'compra'},
    //   { name: 'uligas', img: 'assets/images/distributors/logo-uligas.png',webPage:'https://uligas.cl/' ,tipo:'compra'},
    //   { name: 'gas hn', img: 'assets/images/distributors/logo-gashn.png', webPage:'https://www.gashn.cl/', tipo:'compra' },
    //   { name: 'gas maule', img: 'assets/images/distributors/logo-gasmaule.png', webPage:'https://www.gasmaule.cl/' , tipo:'venta'},
    //   { name: 'gasvalpo', img: 'assets/images/distributors/logo-gasvalpo.png' , webPage:'https://www.gasvalpo.cl/', tipo:'compra' }
    // ]
  
  // this.handleRemoveItem(this.distribuitorsImg, this.distribuitorsImg[5])
  // this.handleGetPuchase(this.distribuitorsImg)
  }

  ngOnInit(): void {
    this.getBrands();
  }

  ngDoCheck(): void {
    this.listDistributors = this.mainFactory.setListDistribuitors();
  }

  private getBrands(): void {
    this.energyService.getBrands().subscribe(response => {
      if (response.estado = 'OK') {
        this.mainFactory.getListDistributors(response.data);
      }
      else {
        this.listDistributors = [];
      }
    }, error => {
      console.log('getBrands', error);
    })
  }

  // handleRemoveItem(array:any , indexElementDelete: any){
  //   const index = array.indexOf(indexElementDelete);
  // if (index > -1) {
  //   array.splice(index, 1);
  // }
  //  console.log(array);
  // }

  // handleGetPuchase(array:any){
  //   array.map(distribuidoras=> {
  //     if(distribuidoras.tipo === 'compra'){
  //       this.arrayPuchase.push(distribuidoras)
  //     }
  //   })
  //   console.log(this.arrayPuchase);
  // }
}
