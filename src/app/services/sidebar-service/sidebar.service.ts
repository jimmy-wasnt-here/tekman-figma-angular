import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  sidebarStatus = false;
  observableStatus: BehaviorSubject<boolean>;

  constructor() { 
    this.observableStatus = new BehaviorSubject(this.sidebarStatus);
  }

  setSidebarStatus(){
    console.log("Service called - status setted")
    if(this.sidebarStatus){
      this.closeSidebar();
    } else {
      this.openSidebar();
    }
    this.sidebarStatus = !this.sidebarStatus;
    this.observableStatus.next(this.sidebarStatus);
  }

  getSidebarStatus(): Observable<boolean>{
    console.log("Service called - status getted");
    return this.observableStatus.asObservable();
  }

  openSidebar(){
    //document.getElementById("mySidenav").style.width = "250px";  
    document.getElementById("sidebarContent").style.opacity = "0.1";
  }
  closeSidebar(){
    //document.getElementById("mySidenav").style.width = "250px";  
    document.getElementById("sidebarContent").style.opacity = "1";
  }
}
