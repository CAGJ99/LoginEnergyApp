import { Component, OnInit, TemplateRef } from '@angular/core';
import { EnergyService } from '../services/energy.service';
import { IResponse } from '../core/interfaces/response.interface';
import { ICompanyData, ICompanyDataList, Callcenter } from '../core/interfaces/call-center.interface';
import { MainFactoryService } from '../core/services/main-factory.service';
import { IRegion } from '../core/interfaces/region.interface';
import { ICommune } from '../core/interfaces/commune.interface';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-call-center-information',
  templateUrl: './call-center-information.component.html',
  styleUrls: ['./call-center-information.component.scss']
})
export class CallCenterInformationComponent implements OnInit {
  listDistribuitors:any;
  communeList:ICommune[];
  companyList: ICompanyData[];
  initialCharge:boolean;
  loadingListDistribuitors:boolean;
  callCenterList:Callcenter[];
  
  constructor
    (private energyService: EnergyService,
     private mainFactory: MainFactoryService,
     private bsModalService: BsModalService
  ) {
    this.listDistribuitors = mainFactory.gasListSelect;
    this.companyList = [];
    this.loadingListDistribuitors=false;
    this.communeList=[];
    this.callCenterList=[];
  }

  ngOnInit(): void {
   this.initialCharge = true;
   this.getCommunes();
   this.getRegions();
  }

  private getCallCenter(nameDistribuitors:string) {
    this.initialCharge = false;
    this.loadingListDistribuitors=true;
    this.energyService.getCallCenter(nameDistribuitors).subscribe((response: IResponse) => {
      if (response.data.length > 0) {
        this.companyList = response.data;
        this.callCenterList= response.data[0].callcenters;
      } else {
        this.companyList = [];
        this.callCenterList=[];
      }
      this.loadingListDistribuitors=false;
    },error=>{
      console.log('getCallCenter', error);
      this.loadingListDistribuitors=false;
    })
  }

  private getCommunes(){
    this.energyService.getCommune().subscribe((response:IResponse)=>{
      if (response.data && response.data.length > 0 ) {
        this.communeList = response.data;
      }else{
        this.communeList = [];
      }

    });
  }

  private getRegions(){
    this.energyService.getRegion().subscribe((response:IResponse)=>{
      if (response.data && response.data.length > 0 ) {
        this.communeList = response.data;
      }else{
        this.communeList = [];
      }

    });
  }

  public onHandleShowModal($event:string, modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 1,
      backdrop: true,
      class: 'modal-lg',
    });
  }

  public onOpenSecondModal(modalTemplate: TemplateRef<any>): void {
    this.bsModalService.show(modalTemplate, {
      id: 2,
      backdrop: true,
      class: 'modal-lg',
    });
  }


  public onValueChange(distribuitorSelected:any){
    this.getCallCenter(distribuitorSelected.value);
  }


}
