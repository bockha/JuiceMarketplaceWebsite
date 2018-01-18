import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {RecipesComponent} from './recipes/recipes.component';
import {CreatorsComponent} from './creators/creators.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview',  component: OverviewComponent },
  { path: 'recipes',  component: RecipesComponent },
  { path: 'creators',  component: CreatorsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule { }
