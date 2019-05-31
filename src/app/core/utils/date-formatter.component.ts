import { Component, Input, OnInit } from '@angular/core';
import * as moment from 'moment';
import { environment } from '../../../environments/environment';

/**
 * Component for conver unix date to readable date format
 *
 * @export
 * @class DateFormatterComponent
 * @implements {OnInit}
 */
@Component({
    selector: 'app-date-formatter',
    template: '{{ formattedDate }}'
})
export class DateFormatterComponent implements OnInit {
    @Input() dateToFormat: number;
    formattedDate: string;

    constructor() { }

    ngOnInit() {
        if (this.dateToFormat) {
            this.formattedDate = moment(`${this.dateToFormat}`).format(environment.defaultDateFormat);
        }
    }
}
