import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { GameCategoryListService } from 'src/app/services/game-category-list.service';
import { GameCategory } from 'src/app/common/game/game-category';

@Component({
  selector: 'app-match-section',
  templateUrl: './match-section.component.html',
  styleUrls: ['./match-section.component.css']
})
export class MatchSectionComponent implements OnInit {

  selectedItemsSingle: GameCategory[] = [];
  selectedItems: GameCategory[] = [];
  dropdownSettingsSingle: IDropdownSettings = {};
  dropdownSettings: IDropdownSettings = {};
  gameCategories: GameCategory[];

  constructor(private gameListService: GameCategoryListService) { }

  ngOnInit(): void {
    this.listGameCategories();

    this.dropdownSettingsSingle = {
      singleSelection: true,
      idField: 'gameCategoryId',
      textField: 'name',
      itemsShowLimit: 1,
      allowSearchFilter: true
    };

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

  listGameCategories() {
    this.gameListService.getGameCategoryList().subscribe(
      data => {
        this.gameCategories = data;
      }
    )
  }

  onItemSelect(item: any) {
    this.selectedItems.push(item);
  }
  onItemSelectSingle(item: any) {
    this.selectedItemsSingle.push(item);
  }
  onDeSelectSingle() {
    this.selectedItemsSingle = [];
  }

  onDeSelect(item: any) {
    this.selectedItems.forEach((value, index) => {
      if (value.gameCategoryId == item.gameCategoryId) this.selectedItems.splice(index, 1);
    });
  }
}
