import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveCourseCardComponent } from './active-course-card.component';

describe('ActiveCourseCardComponent', () => {
  let component: ActiveCourseCardComponent;
  let fixture: ComponentFixture<ActiveCourseCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveCourseCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveCourseCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
