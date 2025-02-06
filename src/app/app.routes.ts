import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageNotFoundComponent } from './feature/page-not-found/page-not-found.component';
import { signinGuard } from './core/auth/signin.guard';
import { authenticationGuard } from './core/auth/authentication.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'auth',
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    canActivateChild: [signinGuard],
    loadChildren: () =>
      import('./feature/auth/auth.route').then((m) => m.routes),
  },
  {
    path: 'events',
    component: MainLayoutComponent,
    canActivateChild: [authenticationGuard],
    loadChildren: () =>
      import('./feature/events/events.route').then((m) => m.routes),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Página não encontrada',
  },
];
