import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeImagePickerComponent } from './recipe-image-picker/recipe-image-picker.component';
import {MatCardModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    FlexLayoutModule
  ],
  declarations: [RecipeImagePickerComponent],
  exports: [RecipeImagePickerComponent]
})
export class RecipeImagePickerModule { }
