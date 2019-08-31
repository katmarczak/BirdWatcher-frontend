import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdentificationCommentComponent } from './identification-comment.component';

describe('IdentificationCommentComponent', () => {
  let component: IdentificationCommentComponent;
  let fixture: ComponentFixture<IdentificationCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdentificationCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdentificationCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
