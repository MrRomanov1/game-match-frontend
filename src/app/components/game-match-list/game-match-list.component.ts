import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Constants } from 'src/app/constants';

import { Game } from 'src/app/common/game/game';
import { GameCategory } from 'src/app/common/game/game-category';
import { Theme } from 'src/app/common/game/theme';

@Component({
  selector: 'app-game-match-list',
  templateUrl: './game-match-list.component.html',
  styleUrls: ['./game-match-list.component.css']
})

export class GameMatchListComponent implements OnInit {
  
  @Input() matchedGames: Game[];
  @Input() showKnob: boolean;

  sortOrder: number;
  sortOptions: SelectItem[];
  sortField: string;
  sortKey: any;
  emptyMessage: string = Constants.EMPTY_SEARCH;

  constructor() { }

  ngOnInit(): void {
    this.setSortOptions();
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  setSortOptions() {
    this.sortOptions = [
      {label: Constants.HIGH_RATED_DATA_VIEW_SORT, value: '!rating'},
      {label: Constants.LOW_RATED_DATA_VIEW_SORT, value: 'rating'},
      {label: Constants.MOST_POPULAR_DATA_VIEW_SORT, value: 'numberOfVotes'}
  ];
  }

  getGameUrl(game: Game) {
    let gameUrl = Constants.GAME_RECORD_URL + game.alias;
    return gameUrl;
  }
}