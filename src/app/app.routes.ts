import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroes/heroe.component';

import {RouterModule, Routes} from '@angular/router';



const app_routes: Routes = [

  {path: 'heroes', component: HeroesComponent},
  {path: 'heroe/:id', component: HeroeComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);
