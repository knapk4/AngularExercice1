import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFiltreComponent } from './liste-filtre.component';

describe('ListeFiltreComponent', () => {
  let component: ListeFiltreComponent;
  let fixture: ComponentFixture<ListeFiltreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeFiltreComponent]
    });
    fixture = TestBed.createComponent(ListeFiltreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
