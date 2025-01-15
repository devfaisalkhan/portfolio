import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./pages/contact/contact.component').then((c) => c.ContactComponent),
  },
  { path: '**', redirectTo: '' },
];
