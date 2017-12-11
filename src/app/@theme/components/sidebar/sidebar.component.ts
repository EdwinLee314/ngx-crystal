import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  styleUrls: ['./sidebar.component.scss'],
  template: `
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
  `,
})
export class SidebarComponent {}
