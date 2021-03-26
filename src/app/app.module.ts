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
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './routers/app-routing.module';
import { ListSessionsComponent } from './components/list-sessions/list-sessions.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarMenuComponent,
    MainContentComponent,
    CourseCardComponent,
    ActiveCourseCardComponent,
    DashboardComponent,
    CourseDetailComponent,
    ListSessionsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
  }
}
