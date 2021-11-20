import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
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
import { SafePipe } from './safe.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CarouselModule } from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HeaderComponent,
    MatchSectionComponent,
    GameRecordPageComponent,
    HeaderAdBannerComponent,
    SafePipe,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    NgbModule,
    NgMultiSelectDropDownModule,
    CarouselModule,
    ButtonModule
  ],
  providers: [GameService, 
    GameCategoryListService],
  bootstrap: [AppComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
})
export class AppModule { }
