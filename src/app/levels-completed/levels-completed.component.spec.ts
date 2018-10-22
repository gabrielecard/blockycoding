import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsCompletedComponent } from './levels-completed.component';

describe('LevelsCompletedComponent', () => {
  let component: LevelsCompletedComponent;
  let fixture: ComponentFixture<LevelsCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LevelsCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LevelsCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
