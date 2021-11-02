import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/common/game/game';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  categoryName: String;
  games: Game[];

  constructor(private route: ActivatedRoute,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = params.get('categoryName')!;
      this.getGameList();
    });

  }

  getGameList() {
    this.gameService.getGameList(this.categoryName).subscribe(
      data => {
        this.games = data;
      }
    )
  }
}