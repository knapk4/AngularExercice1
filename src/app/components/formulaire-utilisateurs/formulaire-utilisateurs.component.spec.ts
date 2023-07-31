import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireUtilisateursComponent } from './formulaire-utilisateurs.component';

describe('FormulaireUtilisateursComponent', () => {
  let component: FormulaireUtilisateursComponent;
  let fixture: ComponentFixture<FormulaireUtilisateursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulaireUtilisateursComponent]
    });
    fixture = TestBed.createComponent(FormulaireUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
