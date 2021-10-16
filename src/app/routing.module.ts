import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameRecordPageComponent } from './components/game-record-page/game-record-page.component';

const routes: Routes = [
    {path: '', component: AppComponent},
    {path: 'game/:recordId', component: GameRecordPageComponent}
  ]

export const RoutingModule = RouterModule.forRoot(routes);
