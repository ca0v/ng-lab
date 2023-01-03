import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDirectiveComponent } from './meta-directive.component';

describe('MetaDirectiveComponent', () => {
  let component: MetaDirectiveComponent;
  let fixture: ComponentFixture<MetaDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaDirectiveComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
