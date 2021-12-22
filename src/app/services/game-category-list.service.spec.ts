import { TestBed } from '@angular/core/testing';

import { GameCategoryListService } from './game-category-list.service';

describe('GameCategoryListService', () => {
  let service: GameCategoryListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameCategoryListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
