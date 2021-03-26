import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToolbarMenuComponent } from './components/toolbar-menu/toolbar-menu.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CourseCardComponent } from './components/course-card/course-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { ActiveCourseCardComponent } from './components/active-course-card/active-course-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    MainContentComponent,
    CourseCardComponent,
    ActiveCourseCardComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  }
}
