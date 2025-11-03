import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { characterDetailGuard } from './character-detail-guard';

describe('characterDetailGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => characterDetailGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
