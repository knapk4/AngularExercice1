import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataCourseComponent } from './data-course.component';

describe('DataCourseComponent', () => {
  let component: DataCourseComponent;
  let fixture: ComponentFixture<DataCourseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataCourseComponent]
    });
    fixture = TestBed.createComponent(DataCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
