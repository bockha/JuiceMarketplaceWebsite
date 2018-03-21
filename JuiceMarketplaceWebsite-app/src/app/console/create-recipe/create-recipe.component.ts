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
        // componentService.sourceUrl="/api/components";
        // componentService.updateComponents();
        //     componentService.setComponents([
        //       new CocktailComponent("1", "Apfelsaft", "#7d7"),
        //       new CocktailComponent("2", "Bananensaft", "#dd7"),
        //       new CocktailComponent("3", "Kirschsaft", "#d77"),
        //       new CocktailComponent("4", "Maracujasaft", "#da7"),
        //       new CocktailComponent("5", "Ananassaft", "#dc9"),
        //       new CocktailComponent("6", "Reserved 1", "#ddf"),
        //       new CocktailComponent("7", "Reserved 2", "#ddf"),
        //       new CocktailComponent("8", "Reserved 3", "#ddf"),
        //   ]
        //   )
        componentService.setRecommendComponentIds(
            [
                "570a5df0-a044-4e22-b6e6-b10af872d75c", // Mineralwasser
                "198f1571-4846-4467-967a-00427ab0208d", // Apfelsaft
                "f6d361a9-5a6f-42ad-bff7-0913750809e4", // Orangensaft
                "fac1ee6f-185f-47fb-8c56-af57cd428aa8", // Mangosaft
                "0425393d-5b84-4815-8eda-1c27d35766cf", // Kirschsaft
                "4cfa2890-6abd-4e21-a7ab-17613ed9a5c9", // Bananensaft
                "14b72ce5-fec1-48ec-83ff-24b124f98dc8", // Maracuijasaft
                "bf2cfd66-5b6f-4655-8e7f-04090308f6db", // Ananassaft
            ]
        );
        componentService.components.subscribe(components => {
            this.components = components;
        })
    }

    getBeakerEditMode() {
        var editMode = false
        let windowWidth = window.innerWidth
        if (windowWidth < 960) {
            editMode = true
        }
        return editMode
    }

    ngOnInit() {
        this.spinnerCounter += 1;
        // this.spinnerCounter += 1;
        // this.marketplaceService.components.subscribe(components => {
        //     this.components = components;
        // });

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

    // ngAfterViewInit() {
    //     this.updateEditMode()
    // }

    actionSaveRecipe() {
        this.accessGuard.guardLoggedIn().subscribe(loggedIn => {
            if (loggedIn) {
                var valid = true;
                var recipe = new Recipe();

                recipe.title = this.recipeName;
                recipe.licenseFee = this.recipeLicenseFee * 100000;
                recipe.description = this.recipeDescription.trim();

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
                    var program = this.cocktail.getMachineProgram()
                    recipe.program = program
                    // recipe.program = JSON.stringify(program)
                    console.log("Recipe:")
                    console.log(recipe)
                    // jsonRecipe["title"] = recipe.technologydataname;
                    // jsonRecipe["description"] = recipe.technologydatadescription;
                    // jsonRecipe["license-fee"] = recipe.licensefee * 100000;
                    // jsonRecipe["program"] = program;
                    // jsonRecipe["imageRef"] = this.recipeImagePicker.getSelectedImage();
                    // jsonRecipe["backgroundColor"] = this.recipeImagePicker.backgroundColor;

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
