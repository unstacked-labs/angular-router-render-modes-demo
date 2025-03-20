import { Routes } from '@angular/router';
import { RenderMode, ServerRoute } from '@angular/ssr';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { redirectIfLoggedInGuard } from './redirect-if-logged-in.guard';
import { redirectIfNotLoggedInGuard } from './redirect-if-not-logged-in.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [redirectIfNotLoggedInGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [redirectIfLoggedInGuard],
  },
];

export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Client,
  },
  {
    path: 'login',
    renderMode: RenderMode.Server,
  },
];
