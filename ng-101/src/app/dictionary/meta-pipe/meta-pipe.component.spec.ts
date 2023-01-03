import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaPipeComponent } from './meta-pipe.component';

describe('MetaPipeComponent', () => {
  let component: MetaPipeComponent;
  let fixture: ComponentFixture<MetaPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetaPipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MetaPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
