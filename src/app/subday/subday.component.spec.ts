import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdayComponent } from './subday.component';

describe('SubdayComponent', () => {
  let component: SubdayComponent;
  let fixture: ComponentFixture<SubdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
