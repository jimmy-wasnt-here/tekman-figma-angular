import { Component, OnInit } from '@angular/core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { CloseSidebar } from 'ng-sidebar';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';
import { SidebarServiceService } from 'src/app/services/sidebar-service.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public courses: Course[];
  public hasActiveCourse: Boolean;
  public sideBarOpened: boolean;
  public faArrowLeft = faArrowLeft;

  constructor(private courseService: CourseService, private sidebarService: SidebarServiceService) { }

  ngOnInit(): void {
    this.courses = this.getCourses();
    this.hasActiveCourse = this.courseService.hasActiveCourse();
    this.setObservableSidebar();
  }

  getCourses(): Course[]{
    return this.courses = this.courseService.findAll();
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
}
