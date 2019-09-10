import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservationCommentComponent } from './observation-comment.component';

describe('ObservationCommentComponent', () => {
  let component: ObservationCommentComponent;
  let fixture: ComponentFixture<ObservationCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservationCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservationCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
