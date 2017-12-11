angular.module('myreports').factory('MyReportsDataService', ['$q', '$http', 'moment', function($q, $http, moment) {

    function getTopRecipes() {
        var defer = $q.defer();
        var limit = 5;
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();

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
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();

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

    function getRevenueHistoryForUser() {
        var defer = $q.defer();
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();

        $http({
            method: 'GET',
            url: '/users/me/reports/revenue/history?from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getRevenueForUserToday() {
        var defer = $q.defer();
        var fromDate = moment().utc().startOf('day').format();
        var toDate = moment().utc().endOf('day').format();

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
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();

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


    function getVaultBalance() {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: '/users/me/vault/balance'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    function getVaultWallets() {
        var defer = $q.defer();

        $http({
            method: 'GET',
            url: '/users/me/vault/wallets'
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
        getRevenueHistoryForUser: getRevenueHistoryForUser,
        getRevenueForUserToday: getRevenueForUserToday,
        getTotalRevenueForUser: getTotalRevenueForUser,
        getVaultBalance: getVaultBalance,
        getVaultWallets: getVaultWallets
    };
}]);
