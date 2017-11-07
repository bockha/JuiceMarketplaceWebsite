angular.module('myreports').factory('MyReportsDataService', ['$q', '$http', 'moment', function($q, $http, moment) {

    function getTopRecipes() {
        var defer = $q.defer();
        var limit = 5;
        var fromDate = moment('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
        var toDate = moment().format('YYYY-MM-DD HH:mm:ss');

        $http({
            method: 'GET',
            url: '/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);

        });
        return defer.promise;
    }

    function getTopRecipeName() {
        var defer = $q.defer();
        var limit = 1;
        var fromDate = moment('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
        var toDate = moment().format('YYYY-MM-DD HH:mm:ss');

        $http({
            method: 'GET',
            url: '/users/me/reports/recipes/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getRevenuePerRecipeForUser() {
        var defer = $q.defer();
        var detail = 'day';
        var fromDate = moment('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
        var toDate = moment().format('YYYY-MM-DD HH:mm:ss');

        $http({
            method: 'GET',
            url: '/users/me/reports/revenue/recipes?detail= ' + detail + '&from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getRevenueForUserToday() {
        var defer = $q.defer();
        var fromDate = moment().format('YYYY-MM-DD') + ' ' + '00:00:00';
        var toDate = moment().format('YYYY-MM-DD') + ' ' + '23:59:59';

        $http({
            method: 'GET',
            url: '/users/me/reports/revenue?from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getTotalRevenueForUser() {
        var defer = $q.defer();
        var fromDate = moment('1970-01-01 00:00:00').format('YYYY-MM-DD HH:mm:ss');
        var toDate = moment().format('YYYY-MM-DD HH:mm:ss');

        $http({
            method: 'GET',
            url: '/users/me/reports/revenue?from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    return {
        getTopRecipes: getTopRecipes,
        getTopRecipeName: getTopRecipeName,
        getRevenuePerRecipeForUser: getRevenuePerRecipeForUser,
        getRevenueForUserToday: getRevenueForUserToday,
        getTotalRevenueForUser: getTotalRevenueForUser
    };
}]);
