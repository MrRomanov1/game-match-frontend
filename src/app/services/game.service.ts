import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/games';
  private gameListBaseUrl = 'http://localhost:8080/games-by-category';

  constructor(private httpClient: HttpClient) { }

  getGameList(categoryName: any): Observable<any> {
    return this.httpClient.get(this.gameListBaseUrl + "/" + categoryName);
  }

  getSingleGame(recordId: any) {
    this.baseUrl = this.baseUrl + "/" + recordId;
    return this.httpClient.get(this.baseUrl);
  }
}
