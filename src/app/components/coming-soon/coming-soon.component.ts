import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/common/game/game';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  games: Game[];

  dateToday = + new Date();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getGameList();
  }

  getGameList() {
    this.gameService.getNotReleasedGames().subscribe(
      data => {
        this.games = data;
      }
    )
  }
}