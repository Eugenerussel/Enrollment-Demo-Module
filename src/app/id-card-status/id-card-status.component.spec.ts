import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IDCardStatusComponent } from './id-card-status.component';

describe('IDCardStatusComponent', () => {
  let component: IDCardStatusComponent;
  let fixture: ComponentFixture<IDCardStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IDCardStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IDCardStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
