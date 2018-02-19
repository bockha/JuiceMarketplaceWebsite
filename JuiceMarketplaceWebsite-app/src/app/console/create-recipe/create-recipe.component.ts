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

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.css'],
    providers: [MarketplaceService, RecipeService],
})

@Injectable()
export class CreateRecipeComponent implements OnInit {
    @ViewChild(RecipeImagePickerComponent) recipeImagePicker: RecipeImagePickerComponent;

    components: TdmComponent[];
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
                private accessGuard: AccessGuard,) {

    }

    ngOnInit() {
        this.spinnerCounter += 1;
        // this.spinnerCounter += 1;
        this.marketplaceService.components.subscribe(components => {
            this.components = components;
        });

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

                var minPhaseAmount = 10;
                var minTotalAmount = 100;
                var maxTotalAmount = 120;
                var maxTotalPause = 5000;

                recipe.technologydataname = this.recipeName;
                recipe.licensefee = this.recipeLicenseFee;
                recipe.technologydatadescription = this.recipeDescription.trim();

                if (valid && this.program.getTotalAmount() < minTotalAmount) {
                    alert("Die Mindestmenge von " + minTotalAmount + " ml wurde unterschritten.");
                    valid = false;
                }
                if (valid && this.program.getTotalAmount() > maxTotalAmount) {
                    alert("Die Höchstmenge von " + maxTotalAmount + " ml wurde überschritten.");
                    valid = false;
                }
                if (valid && this.program.pauseSequence.getTotalAmount() / this.program.amountPerMillisecond > maxTotalPause) {
                    alert("Die zulässige Gesamtdauer der Pausen von " + maxTotalPause + " ms wurde überschritten.");
                    valid = false;
                }
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
                if (valid && this.program.sequences.length == 0) {
                    alert("Bitte fügen Sie mindestens eine Zutat hinzu.");
                    valid = false;
                }
                if (valid) {
                    this.spinnerCounter += 1;
                    // create json
                    var jsonProgram = {}; // program
                    jsonProgram['amount-per-millisecond'] = this.program.amountPerMillisecond;
                    var jsonSequences: any[] = []; // sequences
                    this.program.sequences.forEach(sequence => {
                        var jsonSequence = {}; // sequence
                        jsonSequence['ingredient-id'] = sequence.component.id;
                        var jsonPhases: any[] = []; // phases
                        sequence.phases.forEach(phase => {
                            var jsonPhase = {};
                            jsonPhase['start'] = phase.start;
                            jsonPhase['amount'] = phase.amount;
                            jsonPhase['throughput'] = phase.throughput;
                            jsonPhases.push(jsonPhase);
                        });
                        jsonSequence['phases'] = jsonPhases;
                        jsonSequences.push(jsonSequence);
                    });
                    jsonProgram['sequences'] = jsonSequences;

                    var jsonRecipe = {};

                    jsonRecipe['title'] = recipe.technologydataname;
                    jsonRecipe['description'] = recipe.technologydatadescription;
                    jsonRecipe['license-fee'] = recipe.licensefee * 100000;
                    jsonRecipe['program'] = jsonProgram;
                    jsonRecipe['imageRef'] = this.recipeImagePicker.getSelectedImage();
                    jsonRecipe['backgroundColor'] = this.recipeImagePicker.backgroundColor;

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
