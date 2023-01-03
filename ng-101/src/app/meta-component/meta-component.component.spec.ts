import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaComponentComponent } from './meta-component.component';

describe('MetaComponentComponent', () => {
  let component: MetaComponentComponent;
  let fixture: ComponentFixture<MetaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaComponentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
