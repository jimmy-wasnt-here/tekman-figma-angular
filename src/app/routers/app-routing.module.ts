import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseDetailComponent } from '../components/course-detail/course-detail.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { PreplayScreenComponent } from '../components/preplay-screen/preplay-screen.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course-detail/:id', component: CourseDetailComponent },
  { path: 'play/:id', component: PreplayScreenComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
