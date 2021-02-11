import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugperformanceComponent } from './drugperformance.component';

describe('DrugperformanceComponent', () => {
  let component: DrugperformanceComponent;
  let fixture: ComponentFixture<DrugperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
