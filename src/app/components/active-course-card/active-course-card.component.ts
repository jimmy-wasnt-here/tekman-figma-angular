import { Component, Input, OnInit } from '@angular/core';
import { Course } from 'src/app/model/course.model';
import { faPlay, faRandom, faShare } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-active-course-card',
  templateUrl: './active-course-card.component.html',
  styleUrls: ['./active-course-card.component.css']
})
export class ActiveCourseCardComponent implements OnInit {

  faPlay = faPlay;
  faRandom = faRandom;
  faShare = faShare;
  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
