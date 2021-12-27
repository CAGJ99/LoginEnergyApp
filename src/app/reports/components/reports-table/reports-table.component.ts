import { Component, Input, OnInit } from '@angular/core';
import { DTOReports } from '../../../core/interfaces/dto-reports.interface';

@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  styleUrls: ['./reports-table.component.scss']
})
export class ReportsTableComponent implements OnInit {
  returnedArray?: any[];

  @Input() reportsList: DTOReports[];
  constructor() {}

  ngOnInit(): void {
    this.returnedArray = this.reportsList.slice(0, 10);
  }

  public pageChanged($event: any) {
    const startItem = ($event.page - 1) * $event.itemsPerPage;
    const endItem = $event.page * $event.itemsPerPage;
    this.returnedArray = this.reportsList.slice(startItem, endItem);
  }

}
