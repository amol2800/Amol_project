import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmitionComponent } from './addmition.component';

describe('AddmitionComponent', () => {
  let component: AddmitionComponent;
  let fixture: ComponentFixture<AddmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
