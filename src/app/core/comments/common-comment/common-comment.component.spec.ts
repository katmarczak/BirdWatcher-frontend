import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCommentComponent } from './common-comment.component';

describe('CommonCommentComponent', () => {
  let component: CommonCommentComponent;
  let fixture: ComponentFixture<CommonCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
