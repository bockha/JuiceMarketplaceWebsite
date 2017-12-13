import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Flex-Layout
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { MessageBoxComponent } from './message-box/message-box.component'
import { SpinnerComponent } from './spinner/spinner.component'

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
  ],
  declarations: [
    MessageBoxComponent,
    SpinnerComponent,
  ],
  exports: [
    MessageBoxComponent,
    SpinnerComponent,
  ]
})
export class UtilitiesModule { }
