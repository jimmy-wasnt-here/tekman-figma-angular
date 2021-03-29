import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreplayScreenComponent } from './preplay-screen.component';

describe('PreplayScreenComponent', () => {
  let component: PreplayScreenComponent;
  let fixture: ComponentFixture<PreplayScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreplayScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreplayScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
