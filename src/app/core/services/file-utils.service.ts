import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as FileSaver from 'file-saver';

@Injectable()
export class FileUtilsService {

  constructor() { }

  /**
   * Convert a file to a stream
   *
   * @param file file to convert
   */
  convertFileToStream(file: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const reader = new FileReader();
      // reader.readAsArrayBuffer(file);
      reader.onload = () => {
        observer.next(reader.result);
        observer.complete();
      };
      reader.readAsArrayBuffer(file);
    });
  }

  /**
   * Convert file to bytearray data
   *
   * @param file file to convert
   */
  converFileToDataUrl(file: any): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      const reader = new FileReader();
      reader.onload = () => {
        observer.next(reader.result);
        observer.complete();
      };
      reader.readAsDataURL(file);
    });
  }

  /**
   * Convert data url to blob object
   *
   * @param dataURI Data to convert
   */
  convertDataUrlToBlob(dataURI: string): Observable<any> {
    return Observable.create((observer: Observer<any>) => {
      // convert base64 to raw binary data held in a string
      const byteString = atob(dataURI.split(',')[1]);
      // separate out the mime component
      const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
      // write the bytes of the string to an ArrayBuffer
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      observer.next(new Blob([ab], { type: mimeString }));
      observer.complete();
    });
  }

  /**
   * Download a file from the stream
   *
   * @param data data to convert to file
   * @param fileName Name of the file stored in db
   * @param originalFileName Original name of the file
   */
  downloadFileFromStream(data: any, fileName: any, originalFileName: any) {
    // Default mime type
    const octetStreamMime = 'application/octet-stream';

    // Get the blob url creator
    // tslint:disable-next-line:no-string-literal
    const urlCreator = window.URL || window['webkitURL'] || window['mozURL'] || window['msURL'];

    try {
      const blob = new Blob([data], { type: octetStreamMime });
      // TODO: Use https://github.com/jimmywarting/StreamSaver.js for bigger files
      FileSaver.saveAs(blob, originalFileName || fileName);
    } catch (ex) {
      console.log('Download method failed with the following exception: ', ex);
    } finally {
      console.log('File download call completed');
    }
  }
}
