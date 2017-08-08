var recipeChanged = false;

$(function() {
    $.getJSON('/components', function(data) {
        ingredients = [];
        data.forEach(function(element) {
            var id = element['id'];
            var name = element['name'];
            var description = element['description'];
            var ingredient = new Ingredient(id, name, description);
            ingredients.push(ingredient);
            // console.log("Component: id = "+id+", name = '"+name+"', description = '"+description+"'.");
        });
        componentsLoaded(true);
    }).fail(function() {
        ingredients = [];
        componentsLoaded(false);
        console.log("Error");
    })

    
    $(".user-input").change(function() {
        setRecipeChanged();
    });
    
    window.onbeforeunload = function () {
        if (recipeChanged) {
            return 'Sie haben Ihre Änderungen noch nicht gespeichert. Möchten Sie die Seite wirklich verlassen?';
        }
    }
});

function setRecipeChanged(changed) {
    recipeChanged = changed;
}

function componentsLoaded(success) {
    console.log("components");
    if (success) {
        var table = $("#ingredientTable");
        var template = $("#ingredientTable .ingredient")[0];
        $("#ingredientTable .ingredient").remove();
        ingredients.forEach(function(element) {
            var row = $(template).clone();

			row.find('.name').html(element.name);
            row.find('.description').html(element.description);
            row.attr("id", 'ingredient-'+element.id);
            row.click(function() {
                openAddIngredientAmountDialog(element.id);
            });
            table.append(row);
            // table.crea
        });

        // // test program for targetMode 1
        // var sequence = new Sequence(ingredients[3].id);
        // sequence.addPhase(new Phase(0, 200, 100));
        // sequence.addPhase(new Phase(260, 130, 100));
        // recipe.program.addSequence(sequence);

        // sequence = new Sequence(ingredients[1].id);
        // sequence.addPhase(new Phase(0, 100, 100));
        // sequence.addPhase(new Phase(130, 40, 100));
        // recipe.program.addSequence(sequence);

        // sequence = new Sequence(ingredients[2].id);
        // sequence.addPhase(new Phase(0, 80, 100));
        // recipe.program.addSequence(sequence);


        // sequence = new Sequence(ingredients[4].id);
        // sequence.addPhase(new Phase(20, 80, 100));
        // recipe.program.addSequence(sequence);

        // // test program for targetMode 2
        // var sequence = new Sequence(ingredients[3].id);
        // sequence.addPhase(new Phase(0, 200, 80));
        // recipe.program.addSequence(sequence);

        // sequence = new Sequence(ingredients[1].id);
        // sequence.addPhase(new Phase(0, 50, 30));
        // recipe.program.addSequence(sequence);

        // var sequence = new Sequence(ingredients[2].id);
        // sequence.addPhase(new Phase(0, 100, 100));
        // sequence.addPhase(new Phase(260, 130, 100));
        // recipe.program.addSequence(sequence);

        // // test program for targetMode 2
        // var sequence = new Sequence(ingredients[3].id);
        // sequence.addPhase(new Phase(0, 66, 80));
        // recipe.program.addSequence(sequence);

        // var sequence = new Sequence(ingredients[2].id);
        // sequence.addPhase(new Phase(93, 130, 100));
        // recipe.program.addSequence(sequence);




        // sequence = new Sequence(ingredients[1].id);
        // sequence.addPhase(new Phase(150, 80, 100));
        // sequence.addPhase(new Phase(250, 40, 80));
        // sequence.addPhase(new Phase(300, 100, 100));
        // recipe.program.addSequence(sequence);

        // sequence = new Sequence(ingredients[2].id);
        // sequence.addPhase(new Phase(260, 200, 70));
        // recipe.program.addSequence(sequence);

        // // var recipeConfigurator = new RecipeConfigurator(recipe, "recipe");
        // programConfigurator.render();
    } else {

    }
}

function ingredientSearch() {
  // Declare variables 
  var input, filter, table, tr, td, i;
  input = document.getElementById("ingredientSearchBox");
  filter = input.value.toUpperCase();
  table = document.getElementById("ingredientTable");
  tr = table.getElementsByTagName("tr");
  // Loop through all table rows, and hide those who don't match the search query
  // also hide those already used
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    var showIt = true;
    console.log("TR: "+tr[i].id);
    if (td) {
        recipe.program.sequences.forEach(function(sequence) {
            if (tr[i].id == "ingredient-" + sequence.ingredientId) {
                showIt = false;
            }
        });

      if (td.innerHTML.toUpperCase().indexOf(filter) == -1) {
          showIt = false;
      }
    if (showIt) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    } 
  }
}
