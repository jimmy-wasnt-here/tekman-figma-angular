import { Component } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SidebarService } from './services/sidebar-service/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tekman-figma-angular';

  public sideBarOpened: boolean;
  public languages = ["español", "inglés", "francés"];
  public courses = ["3º Infantil", "4º Infantil", "5º Infantil"];
  public faArrowLeft = faArrowLeft;

  constructor(private sidebarService: SidebarService){}

  ngOnInit(){
    this.setObservableSidebar();
  }

  setObservableSidebar(): void{
    this.sidebarService.getSidebarStatus().subscribe(c => {
      console.log("New sidebar status recieved" + c);
      this.sideBarOpened = c
    });
  }

  closeSidebar(): void{
    this.sidebarService.setSidebarStatus();
  }

  savePreferences(){
    this.sidebarService.setSidebarStatus();
  }
}
