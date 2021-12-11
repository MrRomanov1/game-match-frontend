import { Component, Input, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { Game } from 'src/app/common/game/game';
import { GameCategory } from 'src/app/common/game/game-category';

@Component({
  selector: 'app-game-match-list',
  templateUrl: './game-match-list.component.html',
  styleUrls: ['./game-match-list.component.css']
})

export class GameMatchListComponent implements OnInit {

  @Input() matchedGames: Game[];
  @Input() categoriesToMatch: GameCategory[];

  sortOrder: number;
  sortOptions: SelectItem[];

  sortField: string;

  sortKey: any;

  constructor() { }

  ngOnInit(): void {
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
}
