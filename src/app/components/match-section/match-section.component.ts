import { Component, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

import { Game } from 'src/app/common/game/game';
import { GameCategory } from 'src/app/common/game/game-category';
import { GameMode } from 'src/app/common/game/game-mode';
import { Platform } from 'src/app/common/game/platform';

import { GameService } from 'src/app/services/game.service';
import { GameCategoryListService } from 'src/app/services/game-category-list.service';
import { GameModeService } from 'src/app/services/game-mode.service';
import { PlatformService } from 'src/app/services/platform.service';
import { fromEvent, Observable } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-match-section',
  templateUrl: './match-section.component.html',
  styleUrls: ['./match-section.component.css']
})
export class MatchSectionComponent implements OnInit {

  /** selected items */
  selectedItems: GameCategory[] = [];
  sectionButtons: ButtonWrapper[] = [];

  /** utils */
  runAgainFlag: Boolean = true;
  isScreenSmall$: Observable<boolean>;

  /** initial values */
  gameCategories: GameCategory[] = [];
  platforms: Platform[] = [];
  gameModes: GameMode[] = [];

  /** endpoint values */
  categoriesToMatch: GameCategory[] = [];
  platformsToMatch: Platform[] = [];
  gameModesToMatch: GameMode[] = [];
  gameParams: GameWrapper;

  /** output values */
  matchedGames: Game[] = [];

  constructor(
    private gameCategoryListService: GameCategoryListService,
    private gameService: GameService,
    private gameModeService: GameModeService,
    private platformService: PlatformService) { }

  ngOnInit(): void {
    this.getGameCategories();
    this.getPlatforms();
    this.getGameModes();

    const checkScreenSize = () => document.body.offsetWidth < 1200;
    const screenSizeChanged$ = fromEvent(window, 'resize').pipe(debounceTime(500), map(checkScreenSize));
    this.isScreenSmall$ = screenSizeChanged$.pipe(startWith(checkScreenSize()));
  }

  /** initial callouts */
  getGameCategories() {
    this.gameCategoryListService.getGameCategoryList().subscribe(
      data => {
        this.gameCategories = data;
      }
    )
  }

  getPlatforms() {
    this.platformService.getPlatformList().subscribe(
      data => {
        this.platforms = data;
      }
    )
  }

  getGameModes() {
    this.gameModeService.getGameModesList().subscribe(
      data => {
        this.gameModes = data;
      }
    )
  }

  /**gameMatch handlers */
  handleUserMatch() {
    let gameWrapper = new GameWrapper(this.categoriesToMatch, this.gameModesToMatch, this.platformsToMatch);
    this.gameParams = gameWrapper;
    if (this.sectionButtons.length > 0 && this.runAgainFlag == true) {
      try {
        this.getGamesByUserMatch();
      } finally {
        this.runAgainFlag = false;
      }
    } else if (this.sectionButtons.length == 0 && this.runAgainFlag == true) {
      this.matchedGames = [];
    }
  }

  async getGamesByUserMatch() {
    this.gameService
      .getGameMatch(this.gameParams)
      .then(
        async data => {
          this.matchedGames = await data;
        }
      )
  }

  /**item selection handlers */
  handleSelectCategory(item: ButtonWrapper, category: GameCategory) {
    this.sectionButtons.push(item);
    this.categoriesToMatch.push(category);
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleDeselectCategory(item: ButtonWrapper, category: GameCategory) {
    this.categoriesToMatch.forEach((value, index) => {
      if (value.gameCategoryId == category.gameCategoryId) {
        this.categoriesToMatch.splice(index, 1);
      }
    });
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (item.recordName + item.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleSelectMode(item: ButtonWrapper, gameMode: GameMode) {
    this.sectionButtons.push(item);
    this.gameModesToMatch.push(gameMode);
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleDeselectMode(item: ButtonWrapper, gameMode: GameMode) {
    this.gameModesToMatch.forEach((value, index) => {
      if (value.id == gameMode.id) {
        this.gameModesToMatch.splice(index, 1);
      }
    });
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (item.recordName + item.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleSelectPlatform(item: ButtonWrapper, platform: Platform) {
    this.sectionButtons.push(item);
    this.platformsToMatch.push(platform);
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleDeselectPlatform(item: ButtonWrapper, platform: Platform) {
    this.platformsToMatch.forEach((value, index) => {
      if (value.id == platform.id) {
        this.platformsToMatch.splice(index, 1);
      }
    });
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (item.recordName + item.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    this.runAgainFlag = true;
    this.handleUserMatch();
  }

  handleCategoryButtonClick(category: GameCategory) {
    if (category.matchButtonClassField == Constants.BUTTON_MATCH_ACTIVE_CLASS) {
      category.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper(Constants.GAME_CATEGORY_ENTITY, category.name, category.gameCategoryId);
      this.handleDeselectCategory(sectionButton, category);
    } else {
      category.matchButtonClassField = Constants.BUTTON_MATCH_ACTIVE_CLASS;
      let sectionButton = new ButtonWrapper(Constants.GAME_CATEGORY_ENTITY, category.name, category.gameCategoryId);
      this.handleSelectCategory(sectionButton, category);
    }
    this.handleUserMatch();
  }

  handleModeButtonClick(gameMode: GameMode) {
    if (gameMode.matchButtonClassField == Constants.BUTTON_MATCH_ACTIVE_CLASS) {
      gameMode.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper(Constants.GAME_MODE_ENTITY, gameMode.name, gameMode.id);
      this.handleDeselectMode(sectionButton, gameMode);
    } else {
      gameMode.matchButtonClassField = Constants.BUTTON_MATCH_ACTIVE_CLASS;
      let sectionButton = new ButtonWrapper(Constants.GAME_MODE_ENTITY, gameMode.name, gameMode.id);
      this.handleSelectMode(sectionButton, gameMode);
    }
    this.handleUserMatch();
  }

  handlePlatformButtonClick(platform: Platform) {
    if (platform.matchButtonClassField == Constants.BUTTON_MATCH_ACTIVE_CLASS) {
      platform.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper(Constants.PLATFORM_ENTITY, platform.name, platform.id);
      this.handleDeselectPlatform(sectionButton, platform);
    } else {
      platform.matchButtonClassField = Constants.BUTTON_MATCH_ACTIVE_CLASS;
      let sectionButton = new ButtonWrapper(Constants.PLATFORM_ENTITY, platform.name, platform.id);
      this.handleSelectPlatform(sectionButton, platform);
    }
    this.handleUserMatch();
  }


  handleSectionButtonClick(sectionButton: ButtonWrapper) {
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (sectionButton.recordName + sectionButton.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    if (sectionButton.objectType == Constants.GAME_CATEGORY_ENTITY) {
      this.categoriesToMatch.forEach((value, index) => {
        if ((value.name + value.gameCategoryId) == (sectionButton.recordName + sectionButton.recordId)) {
          this.categoriesToMatch[index].matchButtonClassField = "";
          this.categoriesToMatch.splice(index, 1);
        }
      });
    } else if (sectionButton.objectType == Constants.GAME_MODE_ENTITY) {
      this.gameModesToMatch.forEach((value, index) => {
        if ((value.name + value.id) == (sectionButton.recordName + sectionButton.recordId)) {
          this.gameModesToMatch[index].matchButtonClassField = "";
          this.gameModesToMatch.splice(index, 1);
        }
      });
    } else if (sectionButton.objectType == Constants.PLATFORM_ENTITY) {
      this.platformsToMatch.forEach((value, index) => {
        if ((value.name + value.id) == (sectionButton.recordName + sectionButton.recordId)) {
          this.platformsToMatch[index].matchButtonClassField = "";
          this.platformsToMatch.splice(index, 1);
        }
      });
    }
    this.runAgainFlag = true;
    this.handleUserMatch();
  }
}

export class ButtonWrapper {
  objectType: string;
  recordName: string;
  recordId: BigInteger;

  constructor(objectType: string, recordName: string, recordId: BigInteger) {
    this.objectType = objectType;
    this.recordName = recordName;
    this.recordId = recordId;
  }
}

export class GameWrapper {
  gameCategories: GameCategory[];
  gameModes: GameMode[];
  platforms: Platform[];

  constructor(gameCategories: GameCategory[],
    gameModes: GameMode[],
    platforms: Platform[]
  ) {
    this.gameCategories = gameCategories;
    this.gameModes = gameModes;
    this.platforms = platforms;
  }
}