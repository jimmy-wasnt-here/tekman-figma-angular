import { Component, Input, OnInit } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/model/course.model';
import { Session } from 'src/app/model/session.model';


@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {

  faEye = faEye;
  @Input() course: Course;

  constructor() { }

  ngOnInit(): void {
  }

}
