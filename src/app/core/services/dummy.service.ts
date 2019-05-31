import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class DummyService {

  constructor(
    private httpService: HttpService
  ) { }

  /**
   * Dummy endpoint to get user profiles
   *
   * @returns
   * @memberof UserService
   */
  getRandomUser(limit: number) {
    return this.httpService.get(`https://randomuser.me/api/?page=1&results=${limit}&seed=abcd&nat=us&inc=name,email,picture`);
  }
}
