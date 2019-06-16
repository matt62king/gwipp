import { TestBed } from '@angular/core/testing';

import { DropMenuService } from './drop-menu.service';

describe('DropMenuService', () => {
  let service: DropMenuService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(DropMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should notify subscribers', () => {
    const spy = spyOn(service.state$, 'next');
    service.toggleMenu('key', true);

    expect(spy).toHaveBeenCalled();
  });
});
