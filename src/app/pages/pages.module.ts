import { NgModule } from '@angular/core';

import { ThemeModule } from '../@theme/theme.module';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.componet';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [
    PagesComponent,
    DashboardComponent
  ],
})
export class PagesModule {}
