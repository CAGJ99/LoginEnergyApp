import { Component, Input, OnInit } from '@angular/core';
import { ICommune } from 'src/app/core/interfaces/commune.interface';
import { IRegion } from 'src/app/core/interfaces/region.interface';
import { Callcenter } from '../../../core/interfaces/call-center.interface';

@Component({
  selector: 'app-call-center-filter',
  templateUrl: './call-center-filter.component.html',
  styleUrls: ['./call-center-filter.component.scss']
})
export class CallCenterFilterComponent implements OnInit {

  @Input() commune: ICommune[];
  @Input() callCenterList:Callcenter[];
  constructor() { }

  ngOnInit(): void {
    console.log(this.callCenterList);
  }
  onValueChange($event:any){}
}
