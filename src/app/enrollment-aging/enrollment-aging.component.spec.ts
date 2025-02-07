import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollmentAgingComponent } from './enrollment-aging.component';

describe('EnrollmentAgingComponent', () => {
  let component: EnrollmentAgingComponent;
  let fixture: ComponentFixture<EnrollmentAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollmentAgingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollmentAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
