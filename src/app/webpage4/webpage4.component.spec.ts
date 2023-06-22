import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage4Component } from './webpage4.component';

describe('Webpage4Component', () => {
  let component: Webpage4Component;
  let fixture: ComponentFixture<Webpage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Webpage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
