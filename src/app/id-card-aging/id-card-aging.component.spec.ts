import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDCardAgingComponent } from './id-card-aging.component';

describe('IDCardAgingComponent', () => {
  let component: IDCardAgingComponent;
  let fixture: ComponentFixture<IDCardAgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IDCardAgingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDCardAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
