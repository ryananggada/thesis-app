import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomfilteringComponent } from './symptomfiltering.component';

describe('SymptomfilteringComponent', () => {
  let component: SymptomfilteringComponent;
  let fixture: ComponentFixture<SymptomfilteringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SymptomfilteringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomfilteringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
