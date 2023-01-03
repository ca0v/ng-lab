import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaLibraryComponent } from './meta-library.component';

describe('MetaLibraryComponent', () => {
  let component: MetaLibraryComponent;
  let fixture: ComponentFixture<MetaLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
