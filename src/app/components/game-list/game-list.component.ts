import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';
import { Game } from 'src/app/common/game/game';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { PrimeNGConfig, SelectItem } from 'primeng/api';

const gameUrl = '/game/';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  categoryName: String;
  games: Game[];
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;
  sortKey: any;

  constructor(private route: ActivatedRoute,
    private gameService: GameService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryName = params.get('categoryName')!;
      this.getGameList();
    });
    this.sortOptions = [
      {label: 'Price High to Low', value: '!title'},
      {label: 'Price Low to High', value: 'title'}
  ];

  this.primengConfig.ripple = true;
  }

  getGameList() {
    this.gameService.getGameList(this.categoryName).subscribe(
      data => {
        this.games = data;
      }
    )
  }

  getGameUrl(id: any) {
    let gameCategoryUrlById;
    gameCategoryUrlById = gameUrl + id;
    return gameCategoryUrlById;
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