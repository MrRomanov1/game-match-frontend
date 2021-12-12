import { HttpClientModule } from '@angular/common/http';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameService } from './services/game.service';
import { HeaderComponent } from './components/header/header.component';
import { MatchSectionComponent } from './components/match-section/match-section.component';
import { GameCategoryListService } from './services/game-category-list.service';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';
import { RoutingModule } from './routing.module';
import { HeaderAdBannerComponent } from './components/header-ad-banner/header-ad-banner.component';
import { SafePipe } from './safe.pipe';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import {DropdownModule} from 'primeng/dropdown';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {CardModule} from 'primeng/card';
import {MultiSelectModule} from 'primeng/multiselect';
import {TabViewModule} from 'primeng/tabview';
import { GameMatchListComponent } from './components/game-match-list/game-match-list.component';
import {RatingModule} from 'primeng/rating';
import {DialogModule} from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { FormsModule } from '@angular/forms';
import {KnobModule} from 'primeng/knob';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    HeaderComponent,
    MatchSectionComponent,
    GameRecordPageComponent,
    HeaderAdBannerComponent,
    SafePipe,
    HomePageComponent,
    GameMatchListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    NgMultiSelectDropDownModule,
    CarouselModule,
    ButtonModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    MenubarModule,
    InputTextModule,
    CardModule,
    MultiSelectModule,
    TabViewModule,
    RatingModule,
    DialogModule,
    ChipModule,
    FormsModule,
    KnobModule
  ],
  providers: [GameService, 
    GameCategoryListService],
  bootstrap: [AppComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
})
export class AppModule { }
