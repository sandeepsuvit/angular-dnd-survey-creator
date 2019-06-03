import { Injectable } from '@angular/core';
import { Toolbar } from 'src/app/core/models/toolbar.model';

@Injectable()
export class ToolbarService {

  constructor() { }

  /**
   * Get the list of toolbars available
   *
   * @memberof ToolbarService
   */
  getToolbars() {
    const toolbars = [];
    toolbars.push(new Toolbar('TB1', 'Single choice', 'fa-check-square-o'));
    toolbars.push(new Toolbar('TB2', 'Multiple choice', 'fa-list-ul'));
    toolbars.push(new Toolbar('TB3', 'Text', 'fa-font'));
    toolbars.push(new Toolbar('TB4', 'Numeric', 'fa-sort-numeric-asc'));
    toolbars.push(new Toolbar('TB5', 'Date', 'fa-calendar'));
    toolbars.push(new Toolbar('TB6', 'Time', 'fa-clock-o'));
    toolbars.push(new Toolbar('TB7', 'Matrix', 'fa-table'));
    toolbars.push(new Toolbar('TB8', 'Image', 'fa-picture-o'));
    toolbars.push(new Toolbar('TB9', 'Audio', 'fa-volume-up'));
    toolbars.push(new Toolbar('TB10', 'Video', 'fa-video-camera'));
    return toolbars;
  }
}
