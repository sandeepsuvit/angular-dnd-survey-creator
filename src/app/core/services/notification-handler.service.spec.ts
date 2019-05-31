import { TestBed } from '@angular/core/testing';

import { NotificationHandlerService } from './notification-handler.service';

describe('NotificationHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NotificationHandlerService = TestBed.get(NotificationHandlerService);
    expect(service).toBeTruthy();
  });
});
