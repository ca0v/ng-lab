import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaModuleComponent } from './meta-module.component';

describe('MetaModuleComponent', () => {
  let component: MetaModuleComponent;
  let fixture: ComponentFixture<MetaModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaModuleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
