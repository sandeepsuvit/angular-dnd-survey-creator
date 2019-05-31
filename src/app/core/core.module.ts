import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AutosizeDirective } from './directives/autosize.directive';
import { FileValueAccessorDirective } from './directives/file-value-accessor.directive';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { DateFormatterComponent } from './utils/date-formatter.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectConfig, NgSelectModule } from '@ng-select/ng-select';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { HttpService } from './services/http.service';
import { CookieService } from 'ngx-cookie-service';
import { CommonUtilsService } from './services/common-utils.service';
import { ExceptionHandlerService } from './services/exception-handler.service';
import { NotificationHandlerService } from './services/notification-handler.service';
import { FileUtilsService } from './services/file-utils.service';
import { DialogService } from './services/dialog.service';
import { DummyService } from './services/dummy.service';

@NgModule({
  declarations: [
    FileValueAccessorDirective,
    AutosizeDirective,
    TruncatePipe,
    TimeAgoPipe,
    DateFormatterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CarouselModule.forRoot(),
    TabsModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    NgSelectModule,
    LoadingBarHttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule,
    HttpClientModule,
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    ButtonsModule,
    CarouselModule,
    TabsModule,
    PaginationModule,
    PopoverModule,
    NgSelectModule,
    LoadingBarHttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FileValueAccessorDirective,
    AutosizeDirective,
    TruncatePipe,
    TimeAgoPipe,
    DateFormatterComponent,
  ],
  providers: [
    HttpService,
    CookieService,
    CommonUtilsService,
    ExceptionHandlerService,
    NotificationHandlerService,
    FileUtilsService,
    DialogService,
    DummyService
  ]
})
export class CoreModule {
  constructor(
    private config: NgSelectConfig
  ) {
    // Configuration for ng select
    this.config.notFoundText = 'No records found';
  }
}
