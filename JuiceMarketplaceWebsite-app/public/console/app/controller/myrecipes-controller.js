angular
    .module('myrecipes')
    .controller('MyRecipesController', ['$scope', '$timeout', 'MyRecipesDataService',
        function ($scope, $timeout, MyRecipesDataService) {
            $scope.getRecipesForUser = function () {
                MyRecipesDataService.getRecipesForUser().then(function (data) {
                    var drinks = data.data;
                    $scope.technologydataForUser = drinks;
                    $scope.componentlist = drinks.componentlist;
                }, function (error) {
                    console.log(error);
                });
            };

            $scope.deleteRecipe = function (recipeID) {
                MyRecipesDataService.deleteRecipe(recipeID).then(function (data) {
                    window.location.reload();

                }, function (error) {

                    console.log(error);
                });
            };
        }]);