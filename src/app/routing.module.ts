import { Routes, RouterModule } from '@angular/router';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'game/:recordId', component: GameRecordPageComponent},
    {path: 'games/:categoryName', component: GameListComponent},
    {path: 'games', component: GameListComponent}
    
  ]

export const RoutingModule = RouterModule.forRoot(routes);
