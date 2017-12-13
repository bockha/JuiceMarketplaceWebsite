import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog/blog.component';
import {NewsRoutingModule} from './news-routing.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule
  ],
  declarations: [BlogComponent]
})
export class NewsModule { }
