import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * Utils service method that can be used to make all the differet service calls
 *
 * @export
 */
@Injectable()
export class HttpService {
  /**
   * Creates an instance of HttpService.
   * @param http HttpClient
   */
  constructor(private http: HttpClient) { }

  /**
   * For handling all get requests
   */
  get<T>(url: string, options: {} = {}): Observable<T> {
    return this.http.get<T>(url, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }

  /**
   * For handling all post requests
   */
  post<T>(url: string, body: any = null, options: {} = {}): Observable<T> {
    return this.http.post<T>(url, body, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }

  /**
   * For handling all file uploads
   */
  upload<T>(url: string, body: FormData = null, options: {} = {}): Observable<T> {
    return this.http.post<T>(url, body, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }

  /**
   * For handling all put requests
   */
  put<T>(url: string, body: any, options: {} = {}): Observable<T> {
    return this.http.put<T>(url, body, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }

  /**
   * For handling all delete requests
   */
  delete<T>(url: string, options: {} = {}): Observable<T> {
    return this.http.delete<T>(url, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }

  /**
   * For handling all patch requests
   */
  patch<T>(url: string, body: any, options: {} = {}): Observable<T> {
    return this.http.patch<T>(url, body, options)
                    .pipe(
                      map((response) => response),
                      catchError((error) => throwError(error))
                    );
  }
}
