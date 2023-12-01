import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParRaceomponent } from './recherche-par-race.component';

describe('RechercheParRaceComponent', () => {
  let component: RechercheParRaceomponent;
  let fixture: ComponentFixture<RechercheParRaceomponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RechercheParRaceomponent]
    });
    fixture = TestBed.createComponent(RechercheParRaceomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
