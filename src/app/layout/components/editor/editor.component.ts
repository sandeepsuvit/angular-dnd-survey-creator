import { Component, OnInit } from '@angular/core';
import { Toolbar } from 'src/app/core/models/toolbar.model';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  itemsDropped: any[] = [];

  // Options for the placeholder
  placeholderOptions = {
    className: 'dropping-placeholder'
  };

  constructor() { }

  ngOnInit() {
    this.initEditor();
  }

  /**
   * Initialize editor bindings
   *
   * @memberof EditorComponent
   */
  initEditor() {
    this.getToolbarPayload = this.getToolbarPayload.bind(this);
  }

  /**
   * Get the editor payload data
   *
   * @param {number} index
   * @returns
   * @memberof EditorComponent
   */
  getToolbarPayload(index: number) {
    return this.itemsDropped[index];
  }

  /**
   * Handle drop event
   *
   * @param {*} dropResult
   * @returns
   * @memberof EditorComponent
   */
  onDrop(dropResult: any) {
    const { removedIndex, addedIndex, payload } = dropResult;
    let itemToAdd = payload;

    // Fires when no indexes are present
    if (removedIndex === null && addedIndex === null) {
      return;
    }

    // Fires during element rearrange
    if (removedIndex !== null) {
      itemToAdd = this.itemsDropped.splice(removedIndex, 1)[0];
    }

    // Fires during element add
    if (addedIndex !== null) {
      this.itemsDropped.splice(addedIndex, 0, itemToAdd);
    }
  }
}
