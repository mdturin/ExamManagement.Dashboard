import { Injectable } from '@angular/core';
import { isEmpty } from 'lodash';
import { IModal } from '../Models/imodal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  isModalOpen(name: string): boolean {
    if (isEmpty(name)) return false;
    return this.modals.find((modal) => modal.name === name)?.visible ?? false;
  }

  toggleModal(name: string): void {
    if (isEmpty(name)) return;
    const modal = this.modals.find((modal) => modal.name === name);
    if (modal) {
      modal.visible = !modal.visible;
    }
  }

  register(name: string): void {
    if (isEmpty(name)) return;
    if (this.modals.find((modal) => modal.name === name)) return;
    this.modals.push({ name, visible: false });
  }

  unregister(modalName: string) {
    if (isEmpty(modalName)) return;
    this.modals = this.modals.filter((modal) => modal.name !== modalName);
  }

  getModals(): IModal[] {
    return this.modals;
  }
}
