import { Component, OnInit } from '@angular/core';

import { faBars,faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.css']
})
export class ToolbarMenuComponent implements OnInit {
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  faBars = faBars;
  constructor() { }

  ngOnInit(): void {
  }

}
