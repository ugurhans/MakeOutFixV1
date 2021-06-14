import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietAdddComponent } from './diet-addd.component';

describe('DietAdddComponent', () => {
  let component: DietAdddComponent;
  let fixture: ComponentFixture<DietAdddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietAdddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietAdddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
