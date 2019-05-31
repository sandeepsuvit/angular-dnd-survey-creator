import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class NotificationHandlerService {
  private readonly notifier: NotifierService;

  constructor(
    private notifierService: NotifierService
  ) {
    this.notifier = notifierService;
  }

  /**
   * Show on success
   * @param message Message to display
   */
  success(message: string) {
    this.notifier.notify('success', message || 'Empty message');
  }

  /**
   * Show on warning
   * @param message Message to display
   */
  warning(message: string) {
    this.notifier.notify('warning', message || 'Empty message');
  }

  /**
   * Show on error
   * @param message Message to display
   */
  error(message: string) {
    this.notifier.notify('error', message || 'Empty message');
  }

  /**
   * Show on info
   * @param message Message to display
   */
  info(message: string) {
    this.notifier.notify('info', message || 'Empty message');
  }

  /**
   * Show on default
   * @param message Message to display
   */
  default(message: string) {
    this.notifier.notify('default', message || 'Empty message');
  }
}
