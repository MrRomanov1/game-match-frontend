import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryListService {

  private baseUrl = 'http://localhost:8080/game-categories';

  constructor(private httpClient: HttpClient) { }

  getGameCategoryList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
