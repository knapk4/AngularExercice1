import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDateComponent } from './show-date.component';

describe('ShowDateComponent', () => {
  let component: ShowDateComponent;
  let fixture: ComponentFixture<ShowDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowDateComponent]
    });
    fixture = TestBed.createComponent(ShowDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
