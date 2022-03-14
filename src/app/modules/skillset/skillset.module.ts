import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsetRoutingModule } from './skillset-routing.module';
import { SkillsetComponent } from './skillset.component';


@NgModule({
  declarations: [
    SkillsetComponent
  ],
  imports: [
    CommonModule,
    SkillsetRoutingModule
  ]
})
export class SkillsetModule { }
