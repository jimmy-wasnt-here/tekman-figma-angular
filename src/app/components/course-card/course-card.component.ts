import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  faCircle = faCircle;
  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
