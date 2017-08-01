/**
 * Created by beuttlerma on 28.03.17.
 */

function Recipe(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
}

/**
 *
 * @param jsonData
 * @returns {*}
 * @constructor
 */
Recipe.prototype.CreateRecipeFromJSON = Recipe.CreateRecipeFromJSON = function (jsonData) {

    if (!jsonData) {
        new Recipe();
    }

    return new Recipe(
        jsonData['componentuuid'],
        jsonData['componentname'],
        jsonData['componentdescription']
    );
};

module.exports = Recipe;