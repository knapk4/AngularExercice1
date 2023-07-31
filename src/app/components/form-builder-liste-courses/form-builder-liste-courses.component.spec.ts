import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuilderListeCoursesComponent } from './form-builder-liste-courses.component';

describe('FormBuilderListeCoursesComponent', () => {
  let component: FormBuilderListeCoursesComponent;
  let fixture: ComponentFixture<FormBuilderListeCoursesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuilderListeCoursesComponent]
    });
    fixture = TestBed.createComponent(FormBuilderListeCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
