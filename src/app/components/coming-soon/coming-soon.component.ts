import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

import { Game } from 'src/app/common/game/game';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css']
})
export class ComingSoonComponent implements OnInit {

  games: Game[];
  componentType: string = Constants.COMING_SOON_DATA_VIEW_TYPE;

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