import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';
import {LandingpageRoutingModule} from './landingpage-routing.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    LandingpageRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [StartComponent]
})
export class LandingpageModule { }
