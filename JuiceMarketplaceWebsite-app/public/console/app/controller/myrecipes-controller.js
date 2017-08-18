angular
    .module('myrecipes')
    .controller('MyRecipesController', ['$scope', '$timeout', 'MyRecipesDataService',
        function ($scope, $timeout, MyRecipesDataService) {
            $scope.getRecipesForUser = function () {
                MyRecipesDataService.getRecipesForUser().then(function (data) {
                    $scope.technologydataForUser = data.data;
                    $scope.componentlist = data.data.componentlist;
                }, function (error) {
                    console.log(error);
                });
            };

            $scope.deleteRecipe = function (recipeID) {
                MyRecipesDataService.deleteRecipe(recipeID).then(function (data) {

                }, function (error) {
                    console.log(error);
                });

                window.location.reload();
            };
        }]);