angular.module('myrecipes').factory('MyRecipesDataService', ['$q', '$http', function($q, $http) {

    function getRecipesForUser() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/users/me/recipes'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function deleteRecipe(recipeID) {
        var defer = $q.defer();
        $http({
            method: 'DELETE',
            url: '/users/me/recipes/' + recipeID
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    return {
        getRecipesForUser: getRecipesForUser,
        deleteRecipe: deleteRecipe
    };
}]);
