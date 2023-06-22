import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PgExamComponent } from './pg-exam.component';

describe('PgExamComponent', () => {
  let component: PgExamComponent;
  let fixture: ComponentFixture<PgExamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PgExamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PgExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
