import { Component, OnInit, ViewChild } from '@angular/core';
import { GameCategoryListService } from 'src/app/services/game-category-list.service';
import { GameCategory } from 'src/app/common/game/game-category';
import { Game } from 'src/app/common/game/game';
import { GameService } from 'src/app/services/game.service';
import { Carousel } from 'primeng/carousel';
import { Platform } from 'src/app/common/game/platform';
import { GameMode } from 'src/app/common/game/game-mode';
import { GameModeService } from 'src/app/services/game-mode.service';
import { PlatformService } from 'src/app/services/platform.service';

@Component({
  selector: 'app-match-section',
  templateUrl: './match-section.component.html',
  styleUrls: ['./match-section.component.css']
})
export class MatchSectionComponent implements OnInit {

  @ViewChild('primeCarousel') primeCarousel: Carousel;

  /** selected items */
  selectedItems: GameCategory[] = [];
  sectionButtons: ButtonWrapper[] = [];

  /** utils */
  runAgainFlag: Boolean = true;

  /** initial values */
  gameCategories: GameCategory[] = [];
  platforms: Platform[] = [];
  gameModes: GameMode[] = [];

  /** endpoint values */
  categoriesToMatch: GameCategory[] = [];
  platformsToMatch: Platform[] = [];
  gameModesToMatch: GameMode[] = [];

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
    this.gameService.getGameMatch(this.categoriesToMatch, this.gameModes, this.platforms).then(
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

  handleCategoryButtonClick(category: GameCategory) {
    //this.gameCategories.push(category);
    if (category.matchButtonClassField == "button-match-active") {
      category.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper("GameCategory", category.name, category.gameCategoryId);
      this.handleDeselectCategory(sectionButton, category);
    } else {
      category.matchButtonClassField = "button-match-active";
      let sectionButton = new ButtonWrapper("GameCategory", category.name, category.gameCategoryId);
      this.handleSelectCategory(sectionButton, category);
    }
    this.handleUserMatch();
  }

  handleModeButtonClick(gameMode: GameMode) {
    //this.gameCategories.push(category);
    if (gameMode.matchButtonClassField == "button-match-active") {
      gameMode.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper("GameMode", gameMode.name, gameMode.id);
      this.handleDeselectMode(sectionButton, gameMode);
    } else {
      gameMode.matchButtonClassField = "button-match-active";
      let sectionButton = new ButtonWrapper("GameMode", gameMode.name, gameMode.id);
      this.handleSelectMode(sectionButton, gameMode);
    }
    this.handleUserMatch();
  }

  handlePlatformButtonClick(gameMode: GameMode) {
    //this.gameCategories.push(category);
    if (gameMode.matchButtonClassField == "button-match-active") {
      gameMode.matchButtonClassField = "";
      let sectionButton = new ButtonWrapper("GameMode", gameMode.name, gameMode.id);
      this.handleDeselectMode(sectionButton, gameMode);
    } else {
      gameMode.matchButtonClassField = "button-match-active";
      let sectionButton = new ButtonWrapper("GameMode", gameMode.name, gameMode.id);
      this.handleSelectMode(sectionButton, gameMode);
    }
    this.handleUserMatch();
  }


  handleSectionButtonClick(sectionButton: ButtonWrapper) {
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (sectionButton.recordName + sectionButton.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    if (sectionButton.objectType == "GameCategory") {
      this.categoriesToMatch.forEach((value, index) => {
        if ((value.name + value.gameCategoryId) == (sectionButton.recordName + sectionButton.recordId)) {
          this.categoriesToMatch[index].matchButtonClassField = "";
        }
      });
    } else if (sectionButton.objectType == "GameMode") {
      this.gameModesToMatch.forEach((value, index) => {
        if ((value.name + value.id) == (sectionButton.recordName + sectionButton.recordId)) {
          this.gameModesToMatch[index].matchButtonClassField = "";
        }
      });
    } else if (sectionButton.objectType == "Platform") {
      this.platformsToMatch.forEach((value, index) => {
        if ((value.name + value.id) == (sectionButton.recordName + sectionButton.recordId)) {
          this.platformsToMatch[index].matchButtonClassField = "";
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