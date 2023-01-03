import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetaModuleComponent } from './ng-meta-module.component';

describe('NgMetaModuleComponent', () => {
  let component: NgMetaModuleComponent;
  let fixture: ComponentFixture<NgMetaModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetaModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMetaModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
