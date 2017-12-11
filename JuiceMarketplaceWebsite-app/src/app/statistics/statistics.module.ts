import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import {StatisticsRoutingModule} from './statistics-routing.module';
import { RecipesComponent } from './recipes/recipes.component';
import { CreatorsComponent } from './creators/creators.component';

@NgModule({
  imports: [
    CommonModule,
    StatisticsRoutingModule
  ],
  declarations: [OverviewComponent, RecipesComponent, CreatorsComponent]
})
export class StatisticsModule { }
