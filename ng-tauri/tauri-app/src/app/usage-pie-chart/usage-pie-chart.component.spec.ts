import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsagePieChartComponent } from './usage-pie-chart.component';

describe('UsagePieChartComponent', () => {
  let component: UsagePieChartComponent;
  let fixture: ComponentFixture<UsagePieChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsagePieChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsagePieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
