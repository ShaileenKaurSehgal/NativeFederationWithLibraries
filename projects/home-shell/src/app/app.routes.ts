import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'users',
    loadComponent: () =>
      loadRemoteModule('users', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'todos',
    loadComponent: () =>
      loadRemoteModule('todo', './Component').then((m) => m.AppComponent),
  },
  {
    path: 'userDetails',
    loadComponent: () =>
      loadRemoteModule('users', './DetailsComponent').then(
        (m) => m.UserDetailsComponent
      ),
  },
];
