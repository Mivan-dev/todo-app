import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTarea } from './ver-tarea';

describe('VerTarea', () => {
  let component: VerTarea;
  let fixture: ComponentFixture<VerTarea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerTarea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTarea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
