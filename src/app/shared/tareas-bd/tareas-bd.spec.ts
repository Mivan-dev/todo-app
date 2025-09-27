import { TestBed } from '@angular/core/testing';

import { TareasBd } from './tareas-bd';

describe('TareasBd', () => {
  let service: TareasBd;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TareasBd);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
