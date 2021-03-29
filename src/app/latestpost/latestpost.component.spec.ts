import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestpostComponent } from './latestpost.component';

describe('LatestpostComponent', () => {
  let component: LatestpostComponent;
  let fixture: ComponentFixture<LatestpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestpostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
