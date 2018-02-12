import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeImagePickerComponent } from './recipe-image-picker.component';

describe('RecipeImagePickerComponent', () => {
  let component: RecipeImagePickerComponent;
  let fixture: ComponentFixture<RecipeImagePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeImagePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
