import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericAlertButtonComponent } from './generic-alert-button.component';

describe('GenericAlertButtonComponent', () => {
  let component: GenericAlertButtonComponent;
  let fixture: ComponentFixture<GenericAlertButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenericAlertButtonComponent]
    });
    fixture = TestBed.createComponent(GenericAlertButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
