import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameModeService {

  private baseUrl = 'http://localhost:8080/game-modes';
  
  constructor(private httpClient: HttpClient) { }

  getGameModesList(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
