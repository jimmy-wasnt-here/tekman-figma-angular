import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { CourseService } from 'src/app/services/course-service/course.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  public courses: Course[];
  public hasActiveCourse: Boolean;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.getCourses();
    this.hasActiveCourse = this.courseService.hasActiveCourse();
    
  }

  getCourses(): Course[]{
    return this.courses = this.courseService.findAll();
  }
}
