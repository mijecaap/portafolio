import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './pages/portfolio.component';

import { CarouselModule } from 'primeng/carousel';
import { AngularMaterialModule } from 'src/app/angular-material.module';

@NgModule({
  declarations: [
    PortfolioComponent
  ],
  imports: [
    CarouselModule,
    AngularMaterialModule,
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
