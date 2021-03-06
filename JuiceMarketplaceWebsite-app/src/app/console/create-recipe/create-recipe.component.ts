import {Injectable, ViewChild, ElementRef, HostListener} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

import {MarketplaceService} from '../services/marketplace.service';
import {RecipeService} from '../services/recipe.service';
import {AccessGuard} from '../services/user.service';
import "rxjs/add/operator/combineLatest"
import {RecipeImagePickerComponent} from "../recipe-image-picker/recipe-image-picker/recipe-image-picker.component";

import {Recipe} from 'tdm-common'
import {Cocktail} from 'tdm-common'
import {CocktailComponent} from 'tdm-common'
import {CocktailLayer} from 'tdm-common'
import {ComponentService} from 'tdm-common'
import {ComponentListComponent, DragAndDropService, BeakerComponent} from 'cocktail-configurator'

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.css'],
    providers: [MarketplaceService, RecipeService],
})

@Injectable()
export class CreateRecipeComponent implements OnInit {
    @ViewChild(RecipeImagePickerComponent) recipeImagePicker: RecipeImagePickerComponent;
    @ViewChild(BeakerComponent) beaker: BeakerComponent;

    recipe = new Recipe()
    cocktail: Cocktail;
    components: CocktailComponent[] = [];

    // components: TdmComponent[];
    licenseFees: number[] = [0.25, 0.5, 0.75, 1.00];
    spinnerCounter = 0;
    recipeName: string = "";
    recipeDescription: string = "";
    recipeLicenseFee: number = -1;
    recipesLeft = 0;
    recipeLimit = 0;
    recipeCount = 0;

    constructor(private marketplaceService: MarketplaceService,
                private recipeService: RecipeService,
                private http: HttpClient,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                private accessGuard: AccessGuard,
                private componentService: ComponentService) {

        this.cocktail = new Cocktail();
        this.cocktail.amount = 100;
        componentService.setRecommendComponentIds(
            [
                "570a5df0-a044-4e22-b6e6-b10af872d75c", // Testing: Mineralwasser
                "198f1571-4846-4467-967a-00427ab0208d", // Testing: Apfelsaft
                "f6d361a9-5a6f-42ad-bff7-0913750809e4", // Testing: Orangensaft
                "fac1ee6f-185f-47fb-8c56-af57cd428aa8", // Testing: Mangosaft
                "0425393d-5b84-4815-8eda-1c27d35766cf", // Testing: Kirschsaft
                "4cfa2890-6abd-4e21-a7ab-17613ed9a5c9", // Testing: Bananensaft
                "14b72ce5-fec1-48ec-83ff-24b124f98dc8", // Testing: Maracuijasaft
                "bf2cfd66-5b6f-4655-8e7f-04090308f6db", // Testing: Ananassaft
                "d5a0e575-5767-4496-bac5-0d661ed5b5ee", // Production: Mineralwasser
                "f391d4bf-5b88-4583-9be7-15f029f525f5", // Production: Apfelsaft
                "db46f436-2068-4650-af65-46e504aaa238", // Production: Orangensaft
                "1f6a7ae1-f6f7-4613-adda-4cfdba28b167", // Production: Mangosaft
                "cfc32d53-a386-4023-ba43-bc6996e11b72", // Production: Kirschsaft
                "18851cce-2526-4365-8381-c39c33f95542", // Production: Bananensaft
                "eade7f3b-ec8c-4658-9a84-a98ddca4a352", // Production: Maracuijasaft
                "6c3e5356-b8e0-4978-9f68-c5f7f59ce2f4", // Production: Ananassaft
            ]
        );
        componentService.components.subscribe(components => {
            this.components = components;
        })
    }

    getBeakerEditMode() {
        var editMode = false;
        let windowWidth = window.innerWidth;
        if (windowWidth < 960) {
            editMode = true
        }
        return editMode
    }

    ngOnInit() {
        this.spinnerCounter += 1;

        var rc = this.recipeService.getRecipeCount();
        var rl = this.recipeService.getRecipeLimit();
        rl.subscribe(limit => this.recipeLimit = limit);
        rc.subscribe(count => this.recipeCount = count);
        rc.combineLatest(rl, (count, limit) => limit - count).subscribe(result => {
            this.recipesLeft = result;
            this.spinnerCounter -= 1;
            if (this.recipesLeft <= 0) {
                this.router.navigate(['../recipes', {errorMaxRecipes: true}], {relativeTo: this.activatedRoute});
            }
        });
    }

    actionSaveRecipe() {
        this.accessGuard.guardLoggedIn().subscribe(loggedIn => {
            if (loggedIn) {
                let valid = true;
                //TODO: Declare recipe as Recipe from TDM-Common after Issue #136 was fixed.
                // const recipe = new Recipe();
                const recipe: any = {};

                recipe.title = this.recipeName;
                recipe.licenseFee = this.recipeLicenseFee * 100000;
                recipe.description = this.recipeDescription.trim();
                recipe.imageRef = this.recipeImagePicker.getSelectedImage();
                recipe.backgroundColor = this.recipeImagePicker.backgroundColor;

                if (valid && recipe.title.trim().length < 1) {
                    alert("Bitte geben Sie einen Titel mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.description.length < 1) {
                    alert("Bitte geben Sie eine Beschreibung mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.licenseFee == -1) {
                    alert("Bitte wählen Sie eine Lizenzgebühr aus.");
                    valid = false;
                }
                if (valid && (this.cocktail.layers.length == 0 || this.cocktail.layers[0].components.length == 0)) {
                    alert("Bitte fügen Sie mindestens eine Zutat hinzu.");
                    valid = false;
                }
                if (valid) {
                    this.spinnerCounter += 1;
                    // create json
                    let machineProgram = this.cocktail.getMachineProgram();


                    //TODO: Remove this hotfix -  real fix tracked in issue #134
                    // Round all component amount to integers
                    for (let line_index in machineProgram.recipe.lines) {
                        for (let component_index in machineProgram.recipe.lines[line_index].components) {
                            machineProgram.recipe.lines[line_index].components[component_index].amount = Math.round(machineProgram.recipe.lines[line_index].components[component_index].amount);
                        }
                    }

                    recipe.program = machineProgram;
                    console.log("Recipe:");
                    console.log(recipe);

                    this.http.post('/api/users/me/recipes', recipe).subscribe(
                        data => {
                            this.spinnerCounter -= 1;
                        },
                        error => {
                            this.spinnerCounter -= 1;
                            if (error.status == 201) { // this isn't an error. @see https://github.com/angular/angular/issues/18396
                                this.router.navigateByUrl('/console/recipes');
                            }
                            else if (error.status == 409) {
                                alert("Ein Rezept mit diesem Namen existiert bereits");
                                this.spinnerCounter -= 1;
                            }
                            else {
                                alert("Es ist ein Fehler aufgetreten.\nDas Rezept konnte nicht gespeichert werden. Fehler: " + error.message);
                                this.spinnerCounter -= 1;
                            }
                        }
                    );
                }
            }
        });

    }

}
