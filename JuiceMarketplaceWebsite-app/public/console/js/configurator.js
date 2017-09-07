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

    $( "#dialog-delete-ingredient" ).dialog({
		autoOpen: false,
		resizable: false,
		height: "auto",
		width: 400,
		modal: true,
		buttons: {
			"Abbrechen": function() {
				$(this).dialog('close');
			},
			"Zutat entfernen": function() {
				var configurator = $(this).data('configurator');
				var sequence = $(this).data('sequence');
				configurator.removeSequence(sequence);
				$(this).dialog('close');
			},
		},
	});
	$("#dialog-delete-ingredient").keypress(function(e) {
		if (e.keyCode == $.ui.keyCode.ENTER) {
			$(this).parent().find("button:eq(1)").trigger("click");
		}
	});

});

function setRecipeChanged(changed) {
    recipeChanged = changed;
}

function componentsLoaded(success) {
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
            	var configurator = $( "#dialog-add-ingredient" ).data('configurator');
                // var configurator = $(this).data('configurator');
                var ingredientId = element.id;
                var amount = 50;
                configurator.addIngredient(ingredientId, amount);
                $( "#dialog-add-ingredient" ).dialog('close');
                // openAddIngredientAmountDialog(element.id);
            });
            table.append(row);
            // table.crea
        });
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
