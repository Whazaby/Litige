import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LitigeComponent } from './litige.component';

describe('LitigeComponent', () => {
  let component: LitigeComponent;
  let fixture: ComponentFixture<LitigeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LitigeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LitigeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
