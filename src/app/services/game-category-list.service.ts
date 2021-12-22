import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GameCategoryListService {

  constructor(private httpClient: HttpClient) { }

  getGameCategoryList(): Observable<any> {
    return this.httpClient.get(Constants.GAME_CATEGORY_SERVICE_URL);
  }
}
