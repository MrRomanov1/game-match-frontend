import { Component, OnInit, ViewChild } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
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

  selectedItemsSingle: GameCategory[] = [];
  selectedItems: GameCategory[] = [];
  dropdownSettingsSingle: IDropdownSettings = {};
  dropdownSettings: IDropdownSettings = {};
  gameCategories: GameCategory[] = [];
  emptyCategoryMessage: string = '';
  categoriesToMatch: GameCategory[] = [];
  matchedGames: Game[] = [];
  runAgainFlag: Boolean = true;

  

  constructor(
    private gameCategoryListService: GameCategoryListService,
    private gameService: GameService) {  }

  ngOnInit(): void {
    this.listGameCategories();
    this.setDropdownSettings();
    this.setDropdownSettingsSingle();
  }

  listGameCategories() {
    this.gameCategoryListService.getGameCategoryList().subscribe(
      data => {
        this.gameCategories = data;
      }
    )
  }

  async getGamesByUserMatch(event: Event) {
    this.gameService.getGameMatch(this.categoriesToMatch).then(
      async data => {
        this.matchedGames = await data;
        this.primeCarousel.navBackward(event, 0);
      }
    )
  }

  setMatchingCategories() {
    this.categoriesToMatch = [];
    this.selectedItemsSingle.forEach((value) => {
      this.categoriesToMatch.push(value);
    });
    this.selectedItems.forEach((value) => {
      this.categoriesToMatch.push(value);
    });
  }

  /**single multiselect dropdown handlers*/
  handleSingleSelect(item: any) {
    this.selectedItemsSingle = [];
    this.selectedItemsSingle.push(item);
    this.runAgainFlag = true;
  }

  handleSingleDeselect() {
    this.selectedItemsSingle = [];
    this.runAgainFlag = true;
  }

  /**multiple multiselect dropdown handlers*/
  handleSelect(item: any) {
    this.selectedItems.push(item);
    this.runAgainFlag = true;
  }

  handleDeselect(item: any) {
    this.selectedItems.forEach((value, index) => {
      if (value.gameCategoryId == item.gameCategoryId) this.selectedItems.splice(index, 1);
    });
    this.runAgainFlag = true;
  }

  handleDeselectAll() {
    this.selectedItems = [];
    this.runAgainFlag = true;
  }

  handleSelectAll() {
    this.selectedItems = [];
    this.selectedItems = this.gameCategories;
    this.runAgainFlag = true;
  }

  /**gameMatch handlers */
  handleUserMatch(event: Event) {
    if (this.selectedItemsSingle.length == 0) {
      this.emptyCategoryMessage = 'Należy wybrać podstawowe kryterium wyszukiwania';
    } else if (this.selectedItemsSingle.length > 0 && this.runAgainFlag == true) {
      this.emptyCategoryMessage = '';
      this.setMatchingCategories();
      try {
        this.getGamesByUserMatch(event);
      } finally {
        this.runAgainFlag = false;
      }
    } else {
    }
  }

  /**dropdown settings */
  setDropdownSettings() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'gameCategoryId',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 6,
      allowSearchFilter: true
    };
  }

  setDropdownSettingsSingle() {
    this.dropdownSettingsSingle = {
      singleSelection: true,
      idField: 'gameCategoryId',
      textField: 'name',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };
  }

  handleNextButtonClick(event: Event) {
    this.primeCarousel.navForward(event);
  }

  handlePrevButtonClick(event: Event) {
    this.primeCarousel.navBackward(event);
  }

  handleOpenGameDetails() {
    let gameIndex = this.primeCarousel.firstIndex();
    window.open('game/' + this.matchedGames[gameIndex].id,  '_blank');
  }
}