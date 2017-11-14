import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as $ from 'jquery';

import { MarketplaceService } from '../services/marketplace.service';
// import * as jsRecipe from '../../assets/juice-configurator/js/recipe.js';
import { TdmComponent } from '../juice-program-configurator/models/tdmcomponent';
import { TdmProgram } from '../juice-program-configurator/models/tdmprogram';
import { JuiceProgramConfiguratorComponent } from '../juice-program-configurator/juice-program-configurator.component';
import { TdmRecipe } from '../juice-program-configurator/models/tdmrecipe';

@Component({
  selector: 'app-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css'],
  providers: [MarketplaceService],
})

@Injectable()
export class CreateRecipeComponent implements OnInit {
  components: TdmComponent[];
  licenseFees: number[] = [0.25, 0.5, 0.75, 1.00];

  recipeName: string = "";
  recipeDescription: string = "";
  recipeLicenseFee: number = -1;
  program = new TdmProgram();

  constructor(
    private marketplaceService: MarketplaceService,
    private http: HttpClient
  ) {

  }

  ngOnInit() {
    this.marketplaceService.getComponents().then(components => {
      this.components = components;
    });
  }

  actionSaveRecipe() {
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
      // create json    
      var jsonProgram = {}; // program
      jsonProgram['milliliter-per-millisecond'] = this.program.amountPerMillisecond;      
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
      jsonRecipe['license-fee'] = recipe.licensefee;
      jsonRecipe['program'] = jsonProgram;
      console.log(jsonRecipe);
      var jsonString = JSON.stringify(jsonRecipe);
      console.log("JSONString: ");
      console.log(jsonString);
      console.log("JSONString type: " + typeof(jsonString));
      this.http.post('/users/me/recipes', jsonRecipe).subscribe(data => {
        console.log(data);
      });
    }
    // var json = recipe.toJSON();
    // var jsonString = JSON.stringify(json);
    // console.log("JSON = " + jsonString);
    // // var jsonProgram = json['program'];
    // // var convertedProgram = convert(jsonProgram);

    // $.ajax({
    //   url: '/users/me/recipes',
    //   type: "POST",
    //   data: jsonString,
    //   contentType: "application/json",
    //   success: function () {
    //     console.log(" ############### FERTIG ###############");
    //     setRecipeChanged(false);
    //     window.location.href = "/console/myrecipes";
    //   },
    //   error: function (jqXHR, textStatus, errorThrown) {
    //     console.log(" ############### FEHLER ###############");
    //     console.error(jqXHR);
    //     console.error(jqXHR.status);
    //     console.error(textStatus);
    //     console.error(errorThrown);

    //     setRecipeChanged(false);
    //     if (jqXHR && jqXHR.status >= 400 && jqXHR.status < 500) {
    //       window.alert('Das eingereichte Rezept ist ungültig: [' + jqXHR.responseText + ']');
    //     } else {
    //       window.alert('Beim erstellen Ihres Rezepts ist ein Fehler aufgetreten.');

    //       window.location.href = "/console/myrecipes";
    //     }
    //   }
    // });

    // var recovery = JSON.parse(jsonString);
    // var rec = Recipe.fromJSON(recovery);
    // var converter = new ProgramConverter();
    // var machineCode = converter.convert(rec.program);
    // var machineCodeString = JSON.stringify(machineCode);
    // console.log("Machine-Code:\n\n"+machineCodeString);
    // convertJSONRecipe(jsonString);
    // convertProgramToMachinecode(recipe.program);
    // }
  }

}
