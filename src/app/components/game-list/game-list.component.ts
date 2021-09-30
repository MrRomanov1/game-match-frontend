import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/common/game/game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {    
    this.listGames();
  }

  listGames() {
    this.gameService.getGameList().subscribe(
      data => {
        this.games = data;        
      }
    )
  }
}