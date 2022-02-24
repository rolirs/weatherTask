import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserspaceitemComponent } from './userspaceitem.component';

describe('UserspaceitemComponent', () => {
  let component: UserspaceitemComponent;
  let fixture: ComponentFixture<UserspaceitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserspaceitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserspaceitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
