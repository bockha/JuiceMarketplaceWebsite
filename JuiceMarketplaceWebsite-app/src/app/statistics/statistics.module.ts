import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverviewComponent} from './overview/overview.component';
import {StatisticsRoutingModule} from './statistics-routing.module';
import {RecipesComponent} from './recipes/recipes.component';
import {CreatorsComponent} from './creators/creators.component';
import {MatCardModule} from "@angular/material";
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@NgModule({
    imports: [
        CommonModule,
        StatisticsRoutingModule,
        MatCardModule,
        Ng2GoogleChartsModule
    ],
    declarations: [OverviewComponent, RecipesComponent, CreatorsComponent]
})
export class StatisticsModule {
}
