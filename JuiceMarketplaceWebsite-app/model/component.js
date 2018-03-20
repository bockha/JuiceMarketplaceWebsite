/**
 * Created by beuttlerma on 28.03.17.
 */

function Component(id, name, description, color) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.color = color;
}

/**
 *
 * @param jsonData
 * @returns {*}
 * @constructor
 */
Component.prototype.CreateComponentFromJSON = Component.CreateComponentFromJSON = function (jsonData) {

    if (!jsonData) {
        return new Component();
    }

    return new Component(
        jsonData['componentuuid'],
        jsonData['componentname'],
        jsonData['componentdescription'],
        jsonData['displaycolor']
    );
};

module.exports = Component;