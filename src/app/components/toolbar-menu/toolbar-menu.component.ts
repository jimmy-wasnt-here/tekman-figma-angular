import { Component, OnInit } from '@angular/core';

import { faBars,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  constructor(public sidebarService: SidebarServiceService) { }

  ngOnInit(): void {
  }
  _toggleSidebar(){
    console.log("Conf button clicked");
    this.sidebarService.setSidebarStatus();
  }
}
