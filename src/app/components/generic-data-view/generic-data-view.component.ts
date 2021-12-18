import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/common/game/game';
import { Constants } from 'src/app/constants';

@Component({
  selector: 'app-generic-data-view',
  templateUrl: './generic-data-view.component.html',
  styleUrls: ['./generic-data-view.component.css']
})
export class GenericDataViewComponent implements OnInit {  

  @Input() games: Game[];
  @Input() componentType: string;
  emptyMessage: string = Constants.EMPTY_SEARCH;

  constructor() { }

  ngOnInit(): void {
    this.setComponentConfig();
  }

  getGameUrl (game: Game) {
    let gameUrl = Constants.SITE_URL + 'game/' + game.id;
    return gameUrl;
  }

  setComponentConfig() {
    if (this.componentType == Constants.POPULAR_DATA_VIEW_TYPE) {
      this.setComponentConfigToPopular();
    }
  }

  setComponentConfigToPopular() {

  }
}