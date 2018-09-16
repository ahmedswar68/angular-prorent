import { TestBed, inject } from '@angular/core/testing';

import { MainCategoriesService } from './main-categories.service';

describe('MainCategoriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainCategoriesService]
    });
  });

  it('should be created', inject([MainCategoriesService], (service: MainCategoriesService) => {
    expect(service).toBeTruthy();
  }));
});
