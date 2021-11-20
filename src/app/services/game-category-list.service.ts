import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GameCategory } from '../common/game/game-category';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryListService {

  private baseUrl = 'http://localhost:8080/game-categories/all';

  constructor(private httpClient: HttpClient) { }

  getGameCategoryList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
