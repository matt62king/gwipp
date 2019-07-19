import { TestBed } from '@angular/core/testing';

import { TypeAheadService } from './type-ahead.service';
import {TypeAheadServiceModule} from './type-ahead-service.module';

describe('TypeAheadService', () => {
  let service: TypeAheadService;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [TypeAheadServiceModule]
  }));

  beforeEach(() => {
    service = TestBed.get(TypeAheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify subscribers', () => {
    const spy = spyOn(service.update$, 'next');
    service.dispatch({input: 'input'});

    expect(spy).toHaveBeenCalledWith({input: 'input'});
  });
});
