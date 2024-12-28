import { Route, Routes } from '@angular/router';

export const routes: Route[] = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./pages/projects/projects.component').then((c) => c.ProjectsComponent),
  },
  { path: '**', redirectTo: '/home' },
];
