import { Injectable } from '@angular/core';
import { NotificationHandlerService } from './notification-handler.service';

@Injectable()
export class ExceptionHandlerService {

  constructor(
    private notificationHandlerService: NotificationHandlerService
  ) {}

  /**
   * Handle all errors
   * @param payload error data
   */
  handleErrors(payload: any) {
    console.log(payload);
    switch (payload.status) {
      case 400:
        this.notificationHandlerService.error(payload.error.message || 'Internal server error');
        break;

      case 401:
        this.notificationHandlerService.error(payload.error.message || 'Internal server error');
        break;

      default:
        this.notificationHandlerService.error(payload.error.message || 'Internal server error');
        break;
    }
  }
}
