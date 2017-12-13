import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsoleMenuComponent } from './console/console-menu.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material';
import { StatisticsComponent } from './statistics/statistics.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule
  ],
  declarations: [ConsoleMenuComponent, StatisticsComponent, IndexComponent]
})
export class SidebarModule { }
