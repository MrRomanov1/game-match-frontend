import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game-record-page',
  templateUrl: './game-record-page.component.html',
  styleUrls: ['./game-record-page.component.css']
})
export class GameRecordPageComponent implements OnInit {

  recordId: number;
  game: any;

  constructor(private route: ActivatedRoute, 
    private gameService: GameService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.recordId = +params.get('recordId')!;
    });
    this.getGameData();
  }

  getGameData() {
    this.gameService.getSingleGame(this.recordId).subscribe(
      data => {
        this.game = data;
      });  
  }

}
