import { Injectable } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';

@Injectable()
export class DialogService {

  constructor(
    private modalService: BsModalService,
  ) { }

  /**
   * Show add channel modal
   */
  showAddChannelDialog() {
  }

}
