import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../common/game/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameCategory } from '../common/game/game-category';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';

  constructor(private httpClient: HttpClient) { }

  getGameList(): Observable<Game[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.games)
    );
  }

  getSingleGame(recordId: any) {
    this.baseUrl = this.baseUrl + "/" + recordId;
    return this.httpClient.get(this.baseUrl);
  }
}

interface GetResponse {
  _embedded: {
    games: Game[];
  }
  content: {
    gameCategories: GameCategory[];
  }
}
