import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalName!: string;

  constructor(public modal: ModalService, public el: ElementRef) {}

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal(): void {
    this.modal.toggleModal(this.modalName);
  }

  openModal(): void {
    this.modal.toggleModal(this.modalName);
  }

  isModalOpen(): boolean {
    return this.modal.isModalOpen(this.modalName);
  }
}
