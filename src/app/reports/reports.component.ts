import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../services/energy.service';
import { IResponse } from '../core/interfaces/response.interface';
import { DTOReports } from '../core/interfaces/dto-reports.interface';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit {
  searchDateReports: Date;
  reportList:DTOReports[];
  loadingReports:boolean;
  loader: boolean;
  showDate: string;


  constructor(
    private eneryService: EnergyService,
    private datePipe: DatePipe,
  ) {
    this.searchDateReports = new Date();
    this.reportList=[];
    this.loadingReports=false;
    this.loader= false;
    this.showDate = ''
  }


  ngOnInit(): void {
    const searchDateReports = this.datePipe.transform(this.searchDateReports, 'yyyy-MM-dd', 'es');
    this.showDate = this.datePipe.transform(this.searchDateReports, 'EEEE, MMMM d, y', 'es')
    this.getReports(searchDateReports);
  }

  public getReports(dateFilter: string): void {
    this.loader= true;
    this.eneryService.getReports(dateFilter).subscribe((response:IResponse) => {
      if(response.data.length > 0){
        this.reportList.push(...response.data)
      }else{
        this.reportList =[]
      }
      this.loader=  false ;
    },error=>{
      console.log('getReports', error);
      this.loader=  false ;
    });
  }

  public onHandleSearchReports(dateFilter:string): void{
    this.showDate = this.datePipe.transform(dateFilter, 'EEEE, MMMM d, y', 'es')
    const searchDate  = this.datePipe.transform(dateFilter, 'yyyy-MM-dd', 'es')
     this.getReports(searchDate)
  }
}
