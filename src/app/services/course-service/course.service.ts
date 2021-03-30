import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/model/course.model';
import { Session } from 'src/app/model/session.model';
import Courses from '../../../assets/json/courses.json';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public findAll() : Course[]{
    return Courses.courses;
  }

  public findById(id: string): Observable<Course>{
    const course = Courses.courses.find(c => c.id === id) as Course;
    return of(course);
  }
  
  public hasActiveCourse() : Boolean{
    return Courses.activeCourseId? true : false;
  }

  public getActiveCourse() : Course{
    let item = Courses.courses.find(course => course.id == Courses.activeCourseId)
    console.log(item);
    return item;
  }

  public hasActiveSession() : Boolean{
    return Courses.activeCourseId? true : false;
  }

  public getActiveSession() : Session{
    let activeCourse = Courses.courses.find(course => course.id == Courses.activeCourseId);
    console.log(activeCourse);
    let activeSession = activeCourse.sessions.find(session => session.id == Courses.activeSessionId);
    console.log(activeSession);
    return activeSession;
  }

}
