import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  @Input() icon!: string;
  @Input() title!: string;
  @Input() actionSuccess!: string;
  @Input() actionDefault!: string;
  @Input() nivel!: number; // para poder levantar modal sobre modal se debe ir sumando un nivel.
  @Input() activeLoading!: boolean;
  @Input() customClass!: string;
  @Output() handleConfirmActionSuccess: EventEmitter<any> = new EventEmitter();

  constructor(
    private bsModalService: BsModalService
  ) { }

  onCloseModal(): void {
    this.bsModalService.hide(this.nivel);
  }

  onConfirmActionSuccess(): void {
    this.handleConfirmActionSuccess.emit();
  }



}
