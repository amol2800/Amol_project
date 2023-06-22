import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UgExamComponent } from './ug-exam.component';

describe('UgExamComponent', () => {
  let component: UgExamComponent;
  let fixture: ComponentFixture<UgExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UgExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UgExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
