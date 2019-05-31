import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DomSanitizer } from '@angular/platform-browser';

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

  private hashCode(str: string) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      // tslint:disable-next-line:no-bitwise
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
  }

  private intToRGB(i: number) {
    // tslint:disable-next-line:no-bitwise
    const c = (i & 0x00FFFFFF)
      .toString(16)
      .toUpperCase();
    return '00000'.substring(0, 6 - c.length) + c;
  }

  /**
   * Generate a color based on the color
   *
   * @param str String to convert to color
   */
  generateColorCode(str: string) {
    return this.sanitizer.bypassSecurityTrustStyle(`--bg-color: #${this.intToRGB(this.hashCode(str))};`);
  }
}
