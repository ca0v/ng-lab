import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetaComponentComponent } from './ng-meta-component.component';

describe('NgMetaComponentComponent', () => {
  let component: NgMetaComponentComponent;
  let fixture: ComponentFixture<NgMetaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMetaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
