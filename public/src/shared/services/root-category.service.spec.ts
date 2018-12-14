import { TestBed, inject } from '@angular/core/testing';

import { RootCategoryService } from './root-category.service';

describe('RootCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RootCategoryService]
    });
  });

  it('should be created', inject([RootCategoryService], (service: RootCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
