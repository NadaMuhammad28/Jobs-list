import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `
  <div class="h-100 height-100 d-flex justify-content-center align-items-center">
    <div class="spinner-border text-primary" role="status">
    </div>
    </div>
  `,
  styleUrls: []
})
export class LoaderComponent {
}
