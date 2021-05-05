import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { RegisterpageComponent } from './registerpage.component';
import { Router } from '@angular/router';
import { FormBuilder} from '@angular/forms';

describe('RegisterpageComponent', () => {
  let component: RegisterpageComponent;
  let fixture: ComponentFixture<RegisterpageComponent>;

  beforeEach((() => {
     TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule.withRoutes([])],
      declarations: [ RegisterpageComponent ],
      providers: [FormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
