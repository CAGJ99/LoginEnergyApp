import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { esLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-form-reports',
  templateUrl: './form-reports.component.html',
  styleUrls: ['./form-reports.component.scss']
})
export class FormReportsComponent implements OnInit {
  searchForm: FormGroup;
  dateFilter:Date;

  @Output() handleSearchReports: EventEmitter<string> = new EventEmitter();
  constructor(
    private localService: BsLocaleService,
    private formBuilder: FormBuilder
  ) { 
    defineLocale('es', esLocale);
    this.localService.use('es');
    this.dateFilter = new Date();
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      dateFilter: [this.dateFilter],
    });
  }

  onSubmitForm(): void {
    this.handleSearchReports.emit(this.searchForm.value.dateFilter)
   }

}
