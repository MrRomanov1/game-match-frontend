import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../common/game/game';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/api/games';

  constructor(private httpClient: HttpClient) { }

  getGameList(): Observable<Game[]> {
    console.log("Jestem pierogiem");
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.games)
    );
  }
}

interface GetResponse {
  _embedded: {
    games: Game[];
  }
}
