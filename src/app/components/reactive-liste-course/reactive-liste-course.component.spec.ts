import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveListeCourseComponent } from './reactive-liste-course.component';

describe('ReactiveListeCourseComponent', () => {
  let component: ReactiveListeCourseComponent;
  let fixture: ComponentFixture<ReactiveListeCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveListeCourseComponent]
    });
    fixture = TestBed.createComponent(ReactiveListeCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
