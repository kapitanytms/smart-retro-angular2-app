import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroWallComponent } from './retro-wall.component';

describe('RetroWallComponent', () => {
  let component: RetroWallComponent;
  let fixture: ComponentFixture<RetroWallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroWallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroWallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
