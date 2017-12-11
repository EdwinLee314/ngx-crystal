import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgZorroAntdModule } from 'ng-zorro-antd';

import * as fromComponents from './components';
import * as fromLayouts from './layouts';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    ...fromComponents.components,
    ...fromLayouts.layouts,
    NgZorroAntdModule,
  ],
  declarations: [
    ...fromComponents.components,
    ...fromLayouts.layouts,
  ],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
