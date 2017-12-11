import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
    <app-layout-master-detail>
      <router-outlet></router-outlet>
    </app-layout-master-detail>
  `,
})
export class PagesComponent {
}
