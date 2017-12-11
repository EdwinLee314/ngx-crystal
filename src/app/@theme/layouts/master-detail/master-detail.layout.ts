import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-master-detail',
  styleUrls: ['./master-detail.layout.scss'],
  template: `
    <nz-layout style="height: 100%">

      <nz-sider nzCollapsible [(nzCollapsed)]="isCollapsed">
        <div class="logo">
        </div>
        <ul nz-menu [nzTheme]="'dark'" [nzMode]="isCollapsed?'vertical':'inline'">
          <li nz-submenu>
            <span title><i class="anticon anticon-user"></i><span class="nav-text">User</span></span>
            <ul>
              <li nz-menu-item>Tom</li>
              <li nz-menu-item>Bill</li>
              <li nz-menu-item>Alex</li>
            </ul>
          </li>
          <li nz-submenu>
            <span title><i class="anticon anticon-team"></i><span class="nav-text">Team</span></span>
            <ul>
              <li nz-menu-item>Team 1</li>
              <li nz-menu-item>Team 2</li>
            </ul>
          </li>
          <li nz-menu-item><span><i class="anticon anticon-file"></i><span class="nav-text">File</span></span></li>
        </ul>
      </nz-sider>

      <nz-layout>
        <nz-content style="margin:0 16px;">
          <nz-breadcrumb style="margin:12px 0;">
            <nz-breadcrumb-item>User</nz-breadcrumb-item>
            <nz-breadcrumb-item>Bill</nz-breadcrumb-item>
          </nz-breadcrumb>
          <ng-content select="router-outlet"></ng-content>

          <div style="padding:24px; background: #fff; min-height: 360px;">
            Bill is a cat.
          </div>
        </nz-content>

        <app-footer></app-footer>
      </nz-layout>

    </nz-layout>
  `,
})
export class MasterDetailLayoutComponent {
  isCollapsed = true;
}
