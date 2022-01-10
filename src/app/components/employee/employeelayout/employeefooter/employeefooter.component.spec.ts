import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeefooterComponent } from './employeefooter.component';

describe('EmployeefooterComponent', () => {
  let component: EmployeefooterComponent;
  let fixture: ComponentFixture<EmployeefooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeefooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeefooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
