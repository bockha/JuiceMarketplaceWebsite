import {Injectable, ViewChild} from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router, ActivatedRoute} from '@angular/router';
import * as $ from 'jquery';

import {MarketplaceService} from '../services/marketplace.service';
import {TdmComponent} from '../juice-program-configurator/models/tdmcomponent';
import {TdmProgram} from '../juice-program-configurator/models/tdmprogram';
import {TdmRecipe} from '../juice-program-configurator/models/tdmrecipe';
import {RecipeService} from '../services/recipe.service';
import {AccessGuard} from '../services/user.service';
import "rxjs/add/operator/combineLatest"
import {RecipeImagePickerComponent} from "../recipe-image-picker/recipe-image-picker/recipe-image-picker.component";

import {Cocktail} from 'tdm-common'
import {CocktailComponent} from 'tdm-common'
import {CocktailLayer} from 'tdm-common'
import {ComponentService} from 'tdm-common'
import {ComponentListComponent, DragAndDropService} from 'cocktail-configurator'

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.css'],
    providers: [MarketplaceService, RecipeService, DragAndDropService],
})

@Injectable()
export class CreateRecipeComponent implements OnInit {
    @ViewChild(RecipeImagePickerComponent) recipeImagePicker: RecipeImagePickerComponent;

    cocktail: Cocktail;
    components: CocktailComponent[] = [];

    // components: TdmComponent[];
    licenseFees: number[] = [0.25, 0.5, 0.75, 1.00];
    spinnerCounter = 0;
    recipeName: string = "";
    recipeDescription: string = "";
    recipeLicenseFee: number = -1;
    program = new TdmProgram();
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
                    this.cocktail.amount = 120;
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
                    componentService.components.subscribe(components => {
                      this.components = components;
                      if (components.length > 3) {
                      let layer1 = new CocktailLayer();
                      layer1.components.push(this.components[0]);
                      this.cocktail.layers.push(layer1);
                  
                      let layer2 = new CocktailLayer();
                      layer2.components.push(this.components[2]);
                      this.cocktail.layers.push(layer2);
                  
                      let layer3 = new CocktailLayer();
                      layer3.components.push(this.components[0]);
                      layer3.components.push(this.components[1]);
                      // layer3.components.push(this.components[1]);
                      layer3.components.push(this.components[0]);
                      // layer3.components.push(new CocktailLayerComponent(this.components[2], 10));
                      // layer3.components.push(new CocktailLayerComponent(this.components[3], 10));
                      // layer3.components.push(new CocktailLayerComponent(this.components[4], 10));
                      // layer3.components.push(new CocktailLayerComponent(this.components[5], 10));
                      // layer3.components.push(new CocktailLayerComponent(this.components[6], 10));
                      // layer3.components.push(new CocktailLayerComponent(this.components[7], 10));
                      this.cocktail.layers.push(layer3);
                      }
                      })
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
        rc.combineLatest(rl, (count, limit)=> limit-count).subscribe(result => {
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
                var valid = true;
                var recipe = new TdmRecipe();

                recipe.technologydataname = this.recipeName;
                recipe.licensefee = this.recipeLicenseFee;
                recipe.technologydatadescription = this.recipeDescription.trim();

                if (valid && recipe.technologydataname.trim().length < 1) {
                    alert("Bitte geben Sie einen Titel mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.technologydatadescription.length < 1) {
                    alert("Bitte geben Sie eine Beschreibung mit mindestens einem Zeichen ein.");
                    valid = false;
                }
                if (valid && recipe.licensefee == -1) {
                    alert("Bitte wählen Sie eine Lizenzgebühr aus.");
                    valid = false;
                }
                if (valid && (this.cocktail.layers.length == 0 || this.cocktail.layers[0].components.length ==0)) {
                    alert("Bitte fügen Sie mindestens eine Zutat hinzu.");
                    valid = false;
                }
                if (valid) {
                    this.spinnerCounter += 1;                    
                    // create json
                    var program = this.cocktail.getMachineProgram()
                    console.log("MachineProgram:")
                    console.log(program)
                    // var lines: any[] = [];
                    // // total fragments
                    // var count = 0;
                    // this.cocktail.layers.forEach(layer => {
                    //     count += layer.components.length;
                    // })
                
                    // this.cocktail.layers.forEach(layer => {
                    //     var programComponents: any[] = [];
                    //     layer.components.forEach(component => {
                    //     var addNewComponent = true;
                    //     programComponents.forEach(pc => {
                    //         if (pc["ingredient"] == component.id) {
                    //             addNewComponent = false;
                    //             var amount = pc["amount"] + this.cocktail.amount / count;
                    //             pc["amount"] = amount;
                    //         }
                    //     });
                    //     if (addNewComponent) {
                    //         programComponents.push({
                    //             "ingredient": component.id,
                    //             "amount": this.cocktail.amount / count
                    //         });
                    //     }
                    //     // if (components
                    //     // components.push({
                    //     //   "ingredient": layerComponent.component.id,
                    //     //   "amount": layerComponent.amount
                    //     // });
                    //     });
                    //     lines.push({
                    //         "components": programComponents,
                    //         "timing": 2,
                    //         "sleep": 0
                    //     });
                    // });
                    // var program = {
                    //     "lines": lines
                    // };

                    var jsonRecipe = {};
                    jsonRecipe["title"] = recipe.technologydataname;
                    jsonRecipe["description"] = recipe.technologydatadescription;
                    jsonRecipe["license-fee"] = recipe.licensefee * 100000;
                    jsonRecipe["program"] = program;
                    jsonRecipe["imageRef"] = this.recipeImagePicker.getSelectedImage();
                    jsonRecipe["backgroundColor"] = this.recipeImagePicker.backgroundColor;

                    this.http.post('/api/users/me/recipes', jsonRecipe).subscribe(
                        data => {
                            this.spinnerCounter -= 1;
                        },
                        error => {
                            this.spinnerCounter -= 1;
                            if (error.status == 201) { // this isn't an error. @see https://github.com/angular/angular/issues/18396
                                this.router.navigateByUrl('/console/recipes');
                            }
                            else if(error.status == 409) {
                                alert("Ein Rezept mit diesem Namen existiert bereits");
                                this.spinnerCounter -= 1;
                            }
                            else {
                                alert("Es ist ein Fehler aufgetreten.\nDas Rezept konnte nicht gespeichert werden. Fehler: " +  error.message);
                                this.spinnerCounter -= 1;
                            }
                        }
                    );
                }
            }
        });

    }

}
