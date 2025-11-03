import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { charactersListGuard } from './characters-list-guard';

describe('charactersListGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => charactersListGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
