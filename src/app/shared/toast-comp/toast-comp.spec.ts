import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastComp } from './toast-comp';

describe('ToastComp', () => {
  let component: ToastComp;
  let fixture: ComponentFixture<ToastComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastComp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
