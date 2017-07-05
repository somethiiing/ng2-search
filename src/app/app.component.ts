import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <search class="container"></search>
  `,
  styles: [`
    .container {
      width: 100%
    }
  `]
})
export class AppComponent {
  title = 'app';
}
