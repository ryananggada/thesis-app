import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostpurchaseComponent } from './postpurchase.component';

describe('PostpurchaseComponent', () => {
  let component: PostpurchaseComponent;
  let fixture: ComponentFixture<PostpurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostpurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostpurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
