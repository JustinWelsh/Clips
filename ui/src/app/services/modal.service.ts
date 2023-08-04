import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  visible: boolean = false;

  constructor() {}
  // TODO: Create a function that returns the value of our modals visability.
  // TODO: Create a function that toggles visability.

  isModalOpen = () => this.visible;
  toggleModal = () => (this.visible = !this.visible);
}
