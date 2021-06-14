import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDietMethodComponent } from './add-diet-method.component';

describe('AddDietMethodComponent', () => {
  let component: AddDietMethodComponent;
  let fixture: ComponentFixture<AddDietMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDietMethodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDietMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
