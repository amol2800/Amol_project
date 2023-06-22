import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeexamComponent } from './homeexam.component';

describe('HomeexamComponent', () => {
  let component: HomeexamComponent;
  let fixture: ComponentFixture<HomeexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeexamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
