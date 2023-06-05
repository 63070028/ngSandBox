import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage1Component } from './webpage1.component';

describe('Webpage1Component', () => {
  let component: Webpage1Component;
  let fixture: ComponentFixture<Webpage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Webpage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
