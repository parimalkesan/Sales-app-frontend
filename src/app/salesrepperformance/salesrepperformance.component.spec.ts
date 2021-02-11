import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesrepperformanceComponent } from './salesrepperformance.component';

describe('SalesrepperformanceComponent', () => {
  let component: SalesrepperformanceComponent;
  let fixture: ComponentFixture<SalesrepperformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesrepperformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesrepperformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
