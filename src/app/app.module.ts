import { APP_BASE_HREF } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { NgZorroAntdModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,

    NgZorroAntdModule.forRoot(),

    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule { }
