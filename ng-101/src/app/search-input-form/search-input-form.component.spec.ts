import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputFormComponent } from './search-input-form.component';

describe('SearchInputFormComponent', () => {
  let component: SearchInputFormComponent;
  let fixture: ComponentFixture<SearchInputFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchInputFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchInputFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
