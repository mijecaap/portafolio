import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './shared/head/head.component';

const routes: Routes = [
  {
    path: 'home',
    component: HeadComponent,
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'portfolio',
    component: HeadComponent,
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
