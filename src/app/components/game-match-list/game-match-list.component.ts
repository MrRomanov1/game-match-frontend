import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/common/game/game';

@Component({
  selector: 'app-game-match-list',
  templateUrl: './game-match-list.component.html',
  styleUrls: ['./game-match-list.component.css']
})
export class GameMatchListComponent implements OnInit {

  @Input() matchedGames: Game[];

  constructor() { }

  ngOnInit(): void {
  }

}
