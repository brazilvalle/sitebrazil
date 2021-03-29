import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutspadComponent } from './aboutspad.component';

describe('AboutspadComponent', () => {
  let component: AboutspadComponent;
  let fixture: ComponentFixture<AboutspadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutspadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutspadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
