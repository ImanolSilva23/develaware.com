import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { PlansComponent } from './pages/plans/plans.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { CrudComponent } from './pages/crud/crud.component';

export const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'plans', component: PlansComponent },
  { path: 'crud', component: CrudComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent },
];
