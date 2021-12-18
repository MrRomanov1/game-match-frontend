import { Component, Input, OnInit } from '@angular/core';
import { Constants } from 'src/app/constants';

import { Game } from 'src/app/common/game/game';

@Component({
  selector: 'app-generic-data-view',
  templateUrl: './generic-data-view.component.html',
  styleUrls: ['./generic-data-view.component.css']
})
export class GenericDataViewComponent implements OnInit {  

  @Input() games: Game[];
  @Input() componentType: string;
  emptyMessage: string = Constants.EMPTY_SEARCH;

  /** component config */
  shortDate: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.setComponentConfig();
  }

  getGameUrl (game: Game) {
    let gameUrl = Constants.GAME_RECORD_URL + game.id;
    return gameUrl;
  }

  setComponentConfig() {
    if (this.componentType == Constants.POPULAR_DATA_VIEW_TYPE) {
      this.setComponentConfigToPopular();
    } else if (this.componentType == Constants.COMING_SOON_DATA_VIEW_TYPE) {
      this.setComponentConfigToComingSoon();
    } else if (this.componentType == Constants.GENERIC_DATA_VIEW_TYPE) {
      this.setComponentConfigToGeneric();
    }
  }

  setComponentConfigToPopular() {
    this.shortDate = true;
  }

  setComponentConfigToComingSoon() {
    this.shortDate = false;
  }

  setComponentConfigToGeneric() {
    this.shortDate = true;
  }
}