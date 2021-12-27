import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Callcenter, ICompanyData, ICompanyDataList } from '../../../core/interfaces/call-center.interface';
import { MainFactoryService } from '../../../core/services/main-factory.service';

@Component({
  selector: 'app-call-center-table',
  templateUrl: './call-center-table.component.html',
  styleUrls: ['./call-center-table.component.scss']
})
export class CallCenterTableComponent implements OnInit{
  returnedArray?: any[];
  fecha:Date;
  @Input() callCenterList:Callcenter[];
  @Input() loading: boolean;
  @Output() handleShowModal: EventEmitter<string> = new EventEmitter();
  constructor(private mainFactory : MainFactoryService) {

   }

   ngOnInit(): void {
    this.returnedArray = this.callCenterList.slice(0, 10);
   }

 public onShowModal(){
   this.handleShowModal.emit('openModal');
 }


 public pageChanged($event: any) {
  const startItem = ($event.page - 1) * $event.itemsPerPage;
  const endItem = $event.page * $event.itemsPerPage;
  this.returnedArray = this.callCenterList.slice(startItem, endItem);
}

}
