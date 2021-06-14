import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatinetListComponent } from './patinet-list.component';

describe('PatinetListComponent', () => {
  let component: PatinetListComponent;
  let fixture: ComponentFixture<PatinetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatinetListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatinetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
