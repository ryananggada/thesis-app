import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualtransferComponent } from './manualtransfer.component';

describe('ManualtransferComponent', () => {
  let component: ManualtransferComponent;
  let fixture: ComponentFixture<ManualtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualtransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
