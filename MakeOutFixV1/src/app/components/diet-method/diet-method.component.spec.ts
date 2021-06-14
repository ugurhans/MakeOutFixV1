import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietMethodComponent } from './diet-method.component';

describe('DietMethodComponent', () => {
  let component: DietMethodComponent;
  let fixture: ComponentFixture<DietMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
