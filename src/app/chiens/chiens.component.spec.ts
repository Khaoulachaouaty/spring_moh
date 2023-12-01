import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienComponent } from './chiens.component';

describe('ChiensComponent', () => {
  let component: ChienComponent;
  let fixture: ComponentFixture<ChienComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChienComponent]
    });
    fixture = TestBed.createComponent(ChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
