angular.module('dashboard').factory('DashboardDataService', ['$q', '$http', 'moment', function($q, $http, moment) {
    
    function getRecipesByHour() {
        var defer = $q.defer();
        var fromDate = moment().utc().startOf('day').format();
        var toDate = moment().utc().endOf('day').format();
        var detail = 'hour';

        $http({
            method: 'GET',
            url: '/reports/recipes/history?from=' + fromDate + '&to=' + toDate + '&detail=' + detail
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getTopDrinksEver() {
        var defer = $q.defer();
        var limit = 10;
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

    function getTopDrinksOfToday() {
        var defer = $q.defer();
        var limit = 10;
        var fromDate = moment().utc().startOf('day').format();
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

    function getTopComponents() {
        var defer = $q.defer();
        var limit = 10;
        var fromDate = moment().utc().year(2000).format();
        var toDate = moment().utc().format();

        $http({
            method: 'GET',
            url: '/reports/components/top?limit=' + limit + '&from=' + fromDate + '&to=' + toDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    function getTotalRevenue(detail, interval) {
        var defer = $q.defer();
        var fromDate = moment().utc().subtract(interval,'days').startOf('day').format();
        var toDate = moment().utc().endOf('day').format();

        $http({
            method: 'GET',
            url: '/reports/revenue?from=' + fromDate + '&to=' + toDate + '&detail=' + detail
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }

    return {
        getRecipesByHour: getRecipesByHour,
        getTopDrinksEver: getTopDrinksEver,
        getTopDrinksOfToday: getTopDrinksOfToday,
        getTopComponents: getTopComponents,
        getTotalRevenue:getTotalRevenue
    };
}]);
