import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaDataBoundComponent } from './meta-data-bound.component';

describe('MetaDataBoundComponent', () => {
  let component: MetaDataBoundComponent;
  let fixture: ComponentFixture<MetaDataBoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaDataBoundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaDataBoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
