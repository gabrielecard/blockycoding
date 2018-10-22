import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsAllComponent } from './charts-all.component';

describe('ChartsAllComponent', () => {
  let component: ChartsAllComponent;
  let fixture: ComponentFixture<ChartsAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartsAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartsAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
