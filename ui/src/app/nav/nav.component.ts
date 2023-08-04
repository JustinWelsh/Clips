import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {}

  // TODO: Create a function that will toggle our modal and prevent a page refresh.
  openModal($event: Event) {
    $event.preventDefault();
    this.modal.toggleModal();
  }
}
