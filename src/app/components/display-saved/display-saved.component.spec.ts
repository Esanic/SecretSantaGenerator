import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySavedComponent } from './display-saved.component';

describe('DisplaySavedComponent', () => {
  let component: DisplaySavedComponent;
  let fixture: ComponentFixture<DisplaySavedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySavedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaySavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
