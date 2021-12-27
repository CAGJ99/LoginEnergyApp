import { Component, OnInit, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
import { ICompanyData } from '../../../core/interfaces/call-center.interface';
import { MainFactoryService } from '../../../core/services/main-factory.service';

@Component({
  selector: 'app-distribuitor-card',
  templateUrl: './distribuitor-card.component.html',
  styleUrls: ['./distribuitor-card.component.scss']
})
export class DistribuitorCardComponent{
fecha:Date;
  @Input() companyList: ICompanyData[];
  @Input() loading: boolean;
  @Output() handleShowModal: EventEmitter<string> = new EventEmitter();

  constructor(
    private mainFactory : MainFactoryService
    ) { }


 public onShowModal(){
   this.handleShowModal.emit('openModal');
 }
}
