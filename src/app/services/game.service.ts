import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GameCategory } from '../common/game/game-category';
import { map } from 'rxjs/operators';
import { GameMode } from '../common/game/game-mode';
import { Platform } from '../common/game/platform';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';
  private gameListBaseUrl = 'http://localhost:8080/games-by-category';
  private gameMatchUrl = 'http://localhost:8080/match'

  constructor(private httpClient: HttpClient) { }

  getGameList(categoryName: any): Observable<any> {
    return this.httpClient.get(this.gameListBaseUrl + "/" + categoryName);
  }

  getSingleGame(recordId: any) {
    this.baseUrl = this.baseUrl + "/" + recordId;
    return this.httpClient.get(this.baseUrl);
  }

  async getGameMatch(gameCategories: GameCategory[], gameModes: GameMode[], platforms: Platform[]): Promise<any> {
    return await this.httpClient.post<GameCategory[]>(this.gameMatchUrl, gameCategories).pipe(
      map((data: GameCategory[]) => data
      )).toPromise();
  }
}
