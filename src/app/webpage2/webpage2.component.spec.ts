import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage2Component } from './webpage2.component';

describe('Webpage2Component', () => {
  let component: Webpage2Component;
  let fixture: ComponentFixture<Webpage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Webpage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
