import { Component, OnInit } from '@angular/core';
import { ToolbarService } from 'src/app/core/services/toolbar.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent implements OnInit {
  toolbars: any[] = [];

  constructor(
    private toolbarService: ToolbarService
  ) { }

  ngOnInit() {
    this.initToolbar();

    // Required to bind the dnd component to the parent component
    this.toolbarPayload = this.toolbarPayload.bind(this);
  }

  /**
   * Initialize toolbar properties
   *
   * @memberof ToolboxComponent
   */
  initToolbar() {
    this.toolbars = this.toolbarService.getToolbars();
  }

  /**
   * Called to get the payload object to be passed onDrop function.
   *
   * @param {*} indx
   * @returns
   * @memberof ToolboxComponent
   */
  toolbarPayload(indx: any) {
    return this.toolbars[indx];
  }
}
