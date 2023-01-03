import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaProviderComponent } from './meta-provider.component';

describe('MetaProviderComponent', () => {
  let component: MetaProviderComponent;
  let fixture: ComponentFixture<MetaProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetaProviderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MetaProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
