import { Component, OnInit } from '@angular/core';
import { GameCategoryListService } from 'src/app/services/game-category-list.service';
import { GameCategory } from 'src/app/common/game/game-category';

@Component({
  selector: 'app-match-section',
  templateUrl: './match-section.component.html',
  styleUrls: ['./match-section.component.css']
})
export class MatchSectionComponent implements OnInit {


  gameCategories: GameCategory[];

  constructor(private gameListService: GameCategoryListService) { }

  ngOnInit(): void {    
    this.listGameCategories();
  }

  listGameCategories() {
    this.gameListService.getGameCategoryList().subscribe(
      data => {
        this.gameCategories = data;        
      }
    )
  }
}
