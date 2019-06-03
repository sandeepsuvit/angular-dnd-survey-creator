import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class CommonUtilsService {

  constructor(
    private cookieService: CookieService,
    private sanitizer: DomSanitizer
  ) { }

  /**
   * Method to save the data into browser cookies
   *
   * @param type Data type
   * @param dataToPersist Data to save
   */
  setDataInCookies(type: any, dataToPersist: any) {
    // Find tomorrow's date.
    const expireDate = new Date();
    expireDate.setDate(expireDate.getDate() + 1);

    this.cookieService.set(
      type,
      JSON.stringify(dataToPersist),
      // The token validaty
      expireDate,
      // Context path reference
      '/',
      // Domain name for the cookie to attach on
      window.location.hostname
    );
  }

  /**
   * Get the persisted data back from the cookies
   *
   * @param type Data type
   */
  getDataFromCookies(type: any) {
    return JSON.parse(this.cookieService.get(type) || null);
  }

  /**
   * Remove the data from cookies
   * @param type Data type
   */
  removeCookie(type: any) {
    this.cookieService.delete(type, '/', location.hostname);
  }

  /**
   * Remove al the data from cookies
   */
  removeAllCookies() {
    this.cookieService.deleteAll();
  }
}
