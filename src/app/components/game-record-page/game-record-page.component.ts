import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameCategory } from 'src/app/common/game/game-category';
import { GameService } from 'src/app/services/game.service';

const gameCategoryUrl = '/games/';

@Component({
  selector: 'app-game-record-page',
  templateUrl: './game-record-page.component.html',
  styleUrls: ['./game-record-page.component.css']
})
export class GameRecordPageComponent implements OnInit {

  recordId: number;
  game: any;
  mainGameCategory: GameCategory;
  alternateGameCategories: GameCategory[] = [];

  constructor(private route: ActivatedRoute,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recordId = +params.get('recordId')!;
      this.getGameData();
    });

  }

  getGameData() {
    this.gameService.getSingleGame(this.recordId).subscribe(
      data => {
        this.game = data;
      },
      error => {
        this.handleError();
      },
      () => {
        this.splitGameCategories();
      });
  }

  splitGameCategories() {
    let iterator = 0;
    for (let gameCategory of this.game.gameCategories) {
      if (iterator == 0) {
        this.mainGameCategory = gameCategory;
      } else {
        this.alternateGameCategories.push(gameCategory);
      }
      iterator++;
    }
  }

  handleError() {
    //TODO error handler
  }

  getGameCategoryUrl(id: any) {
    let gameCategoryUrlById;
    gameCategoryUrlById = gameCategoryUrl + id;
    return gameCategoryUrlById;
  }

  getGameModeUrl(id: any) {
    let gameModeUrlById;
    gameModeUrlById = gameCategoryUrl + id;
    return gameModeUrlById;
  }

  getPlatformUrl(id: any) {
    let platformUrlById;
    platformUrlById = gameCategoryUrl + id;
    return platformUrlById;
  }
}
