import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetaDirectiveComponent } from './ng-meta-directive.component';

describe('NgMetaDirectiveComponent', () => {
  let component: NgMetaDirectiveComponent;
  let fixture: ComponentFixture<NgMetaDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetaDirectiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMetaDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
