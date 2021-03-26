import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course } from 'src/app/model/course.model';
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

  public getActiveCourse() : String{
    return Courses.activeCourseId;
  }

  public hasActiveSession() : Boolean{
    return Courses.activeCourseId? true : false;
  }

  public getActiveSession() : String{
    return Courses.activeSessionId;
  }

}
