import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMetaProviderComponent } from './ng-meta-provider.component';

describe('NgMetaProviderComponent', () => {
  let component: NgMetaProviderComponent;
  let fixture: ComponentFixture<NgMetaProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMetaProviderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgMetaProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
