import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { EditorComponent } from './components/editor/editor.component';
import { LayoutComponent } from './layout.component';
import { ToolboxComponent } from './components/editor/toolbox/toolbox.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CoreModule,
    SharedModule
  ],
  declarations: [EditorComponent, LayoutComponent, ToolboxComponent],
})
export class LayoutModule { }
