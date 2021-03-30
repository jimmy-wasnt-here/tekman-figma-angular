import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faEye, faEyeSlash, faPlay, faRandom } from '@fortawesome/free-solid-svg-icons';
import { Course } from 'src/app/model/course.model';


@Component({
  selector: 'app-list-sessions',
  templateUrl: './list-sessions.component.html',
  styleUrls: ['./list-sessions.component.css']
})
export class ListSessionsComponent implements OnInit {

  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPlay = faPlay;
  faRandom = faRandom;
  @Input() course: Course;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reproduceSession(id: string){
    this.router.navigate(["/play/"+id], { queryParams: { hasFullView: true }});
  }
}
