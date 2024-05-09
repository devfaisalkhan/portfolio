import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('../app/modules/home/home.component').then((c) => c.HomeComponent),
  },
  { path: '**', redirectTo: '/home' },
];
