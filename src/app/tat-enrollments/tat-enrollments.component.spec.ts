import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TATEnrollmentsComponent } from './tat-enrollments.component';

describe('TATEnrollmentsComponent', () => {
  let component: TATEnrollmentsComponent;
  let fixture: ComponentFixture<TATEnrollmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TATEnrollmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TATEnrollmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
