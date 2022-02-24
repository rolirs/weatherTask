import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdaycarouselComponent } from './subdaycarousel.component';

describe('SubdaycarouselComponent', () => {
  let component: SubdaycarouselComponent;
  let fixture: ComponentFixture<SubdaycarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubdaycarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubdaycarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
