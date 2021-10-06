import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameCategory } from '../common/game/game-category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryListService {

  private baseUrl = 'http://localhost:8080/api/game-categories';

  constructor(private httpClient: HttpClient) { }

  getGameCategoryList(): Observable<GameCategory[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.gameCategories)
    );
  }
}

interface GetResponse {
  _embedded: {
    gameCategories: GameCategory[];
  }
}
