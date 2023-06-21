import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Webpage3Component } from './webpage3.component';

describe('Webpage3Component', () => {
  let component: Webpage3Component;
  let fixture: ComponentFixture<Webpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Webpage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Webpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
