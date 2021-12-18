import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/common/game/game';
import { Constants } from 'src/app/constants';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-popular-games',
  templateUrl: './popular-games.component.html',
  styleUrls: ['./popular-games.component.css']
})
export class PopularGamesComponent implements OnInit {

  games: Game[];
  componentType: string = Constants.POPULAR_DATA_VIEW_TYPE;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGameList();
  }

  getGameList() {
    this.gameService.getAllGames().subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log(console.error());
      },
      () => {
        this.games.sort((a,b) => (b.numberOfVotes * b.rating) - (a.numberOfVotes * a.rating));
      }
    )
  }
}
