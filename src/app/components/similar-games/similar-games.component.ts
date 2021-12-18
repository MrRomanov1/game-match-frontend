import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/common/game/game';
import { GameCategory } from 'src/app/common/game/game-category';
import { Constants } from 'src/app/constants';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-similar-games',
  templateUrl: './similar-games.component.html',
  styleUrls: ['./similar-games.component.css']
})
export class SimilarGamesComponent implements OnInit {

  @Input() gameCategory: GameCategory;
  @Input() currentGame: Game;

  games: Game[];
  gamesToShow: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGameList(); 
  }

  getGameList() {
    this.gameService.getGameListByCategory(this.gameCategory.alias).subscribe(
      data => {
        this.games = data;
      },
      error => {
        console.log(console.error());
      },
      () => {
        this.removeCurrentGame();
      }
    )
  }

  removeCurrentGame() {
    this.games.forEach((value, index) => {
      if (value.id == this.currentGame.id) {
        this.games.splice(index, 1);
      }
    });
  }

  getGameUrl(game: Game) {
    let gameUrl = Constants.SITE_URL + 'game/' + game.id;
    return gameUrl;
  }
}
