import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameWrapper } from '../components/match-section/match-section.component';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';
  private popularGamesUrl = 'http://localhost:8080/games/popular';
  private highRatedGamesUrl = 'http://localhost:8080/games/highest-rating';
  private gameListBaseUrl = 'http://localhost:8080/games-by-category';
  private gameMatchUrl = 'http://localhost:8080/match'
  private notReleasedGamesUrl = 'http://localhost:8080/games/not-released'

  constructor(private httpClient: HttpClient) { }


  getAllGames(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  getNotReleasedGames(): Observable<any> {
    return this.httpClient.get(this.notReleasedGamesUrl);
  }

  getPopularGames(): Observable<any> {
    return this.httpClient.get(this.popularGamesUrl);
  }

  getHighRatedGames(): Observable<any> {
    return this.httpClient.get(this.highRatedGamesUrl);
  }  

  getGameListByCategory(categoryName: any): Observable<any> {
    return this.httpClient.get(this.gameListBaseUrl + "/" + categoryName);
  }

  getSingleGame(recordId: any) {
    this.baseUrl = this.baseUrl + "/" + recordId;
    return this.httpClient.get(this.baseUrl);
  }

  async getGameMatch(gameParameters: GameWrapper): Promise<any> {
    
    return await this.httpClient.post<GameWrapper>(this.gameMatchUrl, gameParameters).pipe(
      map((data: GameWrapper) => data
      )).toPromise();
  }
}
