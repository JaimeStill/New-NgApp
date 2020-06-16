import {
  Component,
  Inject
} from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'confirm-dialog',
  templateUrl: 'confirm.dialog.html'
})
export class ConfirmDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, content: string }
  ) {
    if (data) {
      data.title = data.title
        ? data.title
        : 'Confirm Action?';

      data.content = data.content
        ? data.content
        : 'Are you sure you would like to perform this action?';
    } else {
      data = {
        title: 'Confirm Action?',
        content: 'Are you sure you would like to perform this action?'
      };
    }
  }
}
