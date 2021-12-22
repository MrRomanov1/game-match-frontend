import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameWrapper } from '../components/match-section/match-section.component';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private httpClient: HttpClient) { }


  getAllGames(): Observable<any> {
    return this.httpClient.get(Constants.GAME_SERVICE_URL);
  }

  getNotReleasedGames(): Observable<any> {
    return this.httpClient.get(Constants.GAMES_NOT_RELEASED_SERVICE_URL);
  }

  getPopularGames(): Observable<any> {
    return this.httpClient.get(Constants.GAME_POPULAR_SERVICE_URL);
  }

  getHighRatedGames(): Observable<any> {
    return this.httpClient.get(Constants.GAME_HIGH_RATE_SERVICE_URL);
  }  

  getGameListByCategory(categoryName: any): Observable<any> {
    return this.httpClient.get(Constants.GAMES_BY_CATEGORY_SERVICE_URL + categoryName);
  }

  getSingleGame(gameAlias: any) {
    return this.httpClient.get(Constants.GAME_SERVICE_URL + "/" + gameAlias);
  }

  async getGameMatch(gameParameters: GameWrapper): Promise<any> {
    
    return await this.httpClient.post<GameWrapper>(Constants.GAME_MATCH_SERVICE_URL, gameParameters).pipe(
      map((data: GameWrapper) => data
      )).toPromise();
  }
}
