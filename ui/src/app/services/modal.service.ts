import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  // visible: boolean = false;
  private modals: IModal[] = [];

  constructor() {}

  register = (id: string) => {
    this.modals.push({
      id,
      visible: false,
    });
  };

  unregister(id: string) {
    this.modals = this.modals.filter((m) => m.id !== id);
  }

  // TODO: Create a function that returns the value of our modals visability.
  // TODO: Create a function that toggles visability.

  isModalOpen = (id: string): boolean =>
    !!this.modals.find((element) => element.id === id)?.visible;

  toggleModal = (id: string) => {
    const modal = this.modals.find((element) => element.id === id);
    if (modal) {
      modal.visible = !modal.visible;
    }
  };
}
