import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeRacesComponent } from './liste-races.component';

describe('ListeRacesComponent', () => {
  let component: ListeRacesComponent;
  let fixture: ComponentFixture<ListeRacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeRacesComponent]
    });
    fixture = TestBed.createComponent(ListeRacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
