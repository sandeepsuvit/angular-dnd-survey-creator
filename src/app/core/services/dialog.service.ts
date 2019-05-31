import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Observable } from 'rxjs';

@Injectable()
export class DialogService {

  constructor(
    private modalService: BsModalService,
  ) { }

  /**
   * Show add channel modal
   */
  showAddChannelDialog() {
    // const modalRef = this.modalService.show(AddChannelDialogComponent, { class: 'modal-md' });
    // // Get the reference of the modal component that was loaded
    // const dialogComponent: AddChannelDialogComponent = modalRef.content;
    // return dialogComponent.channelEvent;
  }

}
