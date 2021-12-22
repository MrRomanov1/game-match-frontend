import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Constants } from 'src/app/constants';

import { GameCategory } from 'src/app/common/game/game-category';

import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-record-page',
  templateUrl: './game-record-page.component.html',
  styleUrls: ['./game-record-page.component.css']
})
export class GameRecordPageComponent implements OnInit {

  gameAlias: string;
  game: any;
  mainGameCategory: GameCategory;
  alternateGameCategories: GameCategory[] = [];

  constructor(private route: ActivatedRoute,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.gameAlias = params.get('gameAlias')!;
      this.getGameData();
    });

  }

  getGameData() {
    this.gameService.getSingleGame(this.gameAlias).subscribe(
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
    gameCategoryUrlById = Constants.GAME_CATEGORY_URL + id;
    return gameCategoryUrlById;
  }

  getGameModeUrl(id: any) {
    let gameModeUrlById;
    gameModeUrlById = Constants.GAME_CATEGORY_URL + id;
    return gameModeUrlById;
  }

  getPlatformUrl(id: any) {
    let platformUrlById;
    platformUrlById = Constants.GAME_CATEGORY_URL + id;
    return platformUrlById;
  }
}
