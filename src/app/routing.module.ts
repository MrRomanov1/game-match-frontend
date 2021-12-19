import { Routes, RouterModule } from '@angular/router';
import { FuturePlansComponent } from './components/footer-links/future-plans/future-plans.component';
import { ReleaseNotesComponent } from './components/footer-links/release-notes/release-notes.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'game/:recordId', component: GameRecordPageComponent},
    {path: 'games/:listParam', component: GameListComponent},
    {path: 'games', component: GameListComponent},
    {path: 'release-notes', component: ReleaseNotesComponent},
    {path: 'future-plans', component: FuturePlansComponent}
    
  ]

export const RoutingModule = RouterModule.forRoot(routes);
