import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaRouteComponent } from './meta-route.component';

describe('MetaRouteComponent', () => {
  let component: MetaRouteComponent;
  let fixture: ComponentFixture<MetaRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaRouteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
