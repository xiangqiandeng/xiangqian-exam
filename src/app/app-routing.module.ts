import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const SSRroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', loadChildren: '../pages/home/home.module#HomeModule' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { HomePageComponent } from '../pages/home/home-page/home-page.component';
const SPAroutes: Routes = [
  {
    path: '',
    children: []
  },
  { path: 'home', component: HomePageComponent }
];

const routes = SSRroutes;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
