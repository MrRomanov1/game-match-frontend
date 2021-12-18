import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constants } from '../constants';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {

  private baseUrl = 'http://localhost:8080/game-modes';
  
  constructor(private httpClient: HttpClient) { }

  getGameModesList(): Observable<any> {
    return this.httpClient.get(Constants.GAME_MODE_SERVICE_URL);
  }
}
