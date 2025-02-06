import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { signinGuard } from './signin.guard';

describe('signinGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => signinGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
