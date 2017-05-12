import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiReadyComponent } from './li-ready.component';

describe('LiReadyComponent', () => {
  let component: LiReadyComponent;
  let fixture: ComponentFixture<LiReadyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiReadyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
