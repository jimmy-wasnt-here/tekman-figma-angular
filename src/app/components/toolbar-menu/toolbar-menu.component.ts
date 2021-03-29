import { Component, OnInit } from '@angular/core';

import { faBars,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from 'src/app/services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  constructor(public sidebarService: SidebarService) { }

  ngOnInit(): void {
  }
  _toggleSidebar(){
    console.log("Conf button clicked");
    this.sidebarService.setSidebarStatus();
  }
}
