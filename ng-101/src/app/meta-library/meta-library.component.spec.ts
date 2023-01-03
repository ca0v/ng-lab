import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetaLibraryComponent } from './ng-meta-library.component';

describe('NgMetaLibraryComponent', () => {
  let component: NgMetaLibraryComponent;
  let fixture: ComponentFixture<NgMetaLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetaLibraryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMetaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
