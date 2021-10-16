import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameService } from './services/game.service';
import { HeaderComponent } from './components/header/header.component';
import { MatchSectionComponent } from './components/match-section/match-section.component';
import { GameCategoryListService } from './services/game-category-list.service';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';
import { RoutingModule } from './routing.module';
import { HeaderAdBannerComponent } from './components/header-ad-banner/header-ad-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HeaderComponent,
    MatchSectionComponent,
    GameRecordPageComponent,
    HeaderAdBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgbModule
  ],
  providers: [GameService, 
    GameCategoryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
