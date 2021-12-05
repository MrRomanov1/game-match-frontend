import { Component, OnInit, ViewChild } from '@angular/core';
import { GameCategoryListService } from 'src/app/services/game-category-list.service';
import { GameCategory } from 'src/app/common/game/game-category';
import { Game } from 'src/app/common/game/game';
import { GameService } from 'src/app/services/game.service';
import { Carousel } from 'primeng/carousel';

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

  /** endpoint values */
  categoriesToMatch: GameCategory[] = [];

  /** output values */
  matchedGames: Game[] = [];

  constructor(
    private gameCategoryListService: GameCategoryListService,
    private gameService: GameService) { }

  ngOnInit(): void {
    this.listGameCategories();
  }

  listGameCategories() {
    this.gameCategoryListService.getGameCategoryList().subscribe(
      data => {
        this.gameCategories = data;
      }
    )
  }

  async getGamesByUserMatch() {
    this.gameService.getGameMatch(this.categoriesToMatch).then(
      async data => {
        this.matchedGames = await data;
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
    }
  }

  /**item selection handlers */
  handleSelectCategory(item: ButtonWrapper, category: GameCategory) {
    this.sectionButtons.push(item);
    this.categoriesToMatch.push(category);
    this.runAgainFlag = true;
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
  }

  handleSectionButtonClick(sectionButton: ButtonWrapper) {
    this.sectionButtons.forEach((value, index) => {
      if ((value.recordName + value.recordId) == (sectionButton.recordName + sectionButton.recordId)) {
        this.sectionButtons.splice(index, 1);
      }
    });
    if (sectionButton.objectType == "GameCategory") {
      this.gameCategories.forEach((value, index) => {
        if ((value.name + value.gameCategoryId) == (sectionButton.recordName + sectionButton.recordId)) {
          this.gameCategories[index].matchButtonClassField = "";
        }
      });
    }
    this.runAgainFlag = true;
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