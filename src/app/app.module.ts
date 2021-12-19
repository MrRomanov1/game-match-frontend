import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';
import { LOCALE_ID, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePl);

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { SafePipe } from './safe.pipe';

/** custom components */
import { GameListComponent } from './components/game-list/game-list.component';
import { HeaderComponent } from './components/header/header.component';
import { MatchSectionComponent } from './components/match-section/match-section.component';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';
import { HeaderAdBannerComponent } from './components/header-ad-banner/header-ad-banner.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GameMatchListComponent } from './components/game-match-list/game-match-list.component';
import { SimilarGamesComponent } from './components/similar-games/similar-games.component';
import { PopularGamesComponent } from './components/popular-games/popular-games.component';
import { GenericDataViewComponent } from './components/generic-data-view/generic-data-view.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { FooterComponent } from './components/footer/footer.component';
import { ReleaseNotesComponent } from './components/footer-links/release-notes/release-notes.component';
import { FuturePlansComponent } from './components/footer-links/future-plans/future-plans.component';

/** services */
import { GameService } from './services/game.service';
import { GameCategoryListService } from './services/game-category-list.service';

/** PrimeNG modules */
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabViewModule } from 'primeng/tabview';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { ChipModule } from 'primeng/chip';
import { FormsModule } from '@angular/forms';
import { KnobModule } from 'primeng/knob';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

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
    GameMatchListComponent,
    SimilarGamesComponent,
    PopularGamesComponent,
    GenericDataViewComponent,
    ComingSoonComponent,
    FooterComponent,
    ReleaseNotesComponent,
    FuturePlansComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
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
    KnobModule,
    ToastModule
  ],
  providers: [GameService, 
    GameCategoryListService,
    [{provide: LOCALE_ID, useValue: 'pl'}],
    MessageService
  ],
  bootstrap: [AppComponent
  ],
  schemas:[NO_ERRORS_SCHEMA],
})
export class AppModule { }
