import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { Session } from 'src/app/model/session.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public courses: Course[];
  public hasActiveCourse: Boolean;
  public activeCourse: Course;
  public activeSession: Session;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.getCourses();
    this.hasActiveCourse = this.courseService.hasActiveCourse();
    if(this.hasActiveCourse){
      this.activeCourse = this.courseService.getActiveCourse();
      this.activeSession = this.courseService.getActiveSession();
    } else {
      this.activeCourse = null;
      this.activeSession = null;
    }
  }

  getCourses(): Course[]{
    return this.courses = this.courseService.findAll();
  }
}
