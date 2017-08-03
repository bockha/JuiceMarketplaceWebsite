angular.module('myreports').factory('MyReportsDataService', ['$q', '$http', 'moment', function($q, $http, moment) {
    
    function getDrinksByHours(hours) {
        var defer = $q.defer();
        var sinceDate = moment().subtract(hours, 'hours').format('YYYY-MM-DD HH:mm:ss');
        $http({
            method: 'GET',
            url: '/myreports?sinceDate=' + sinceDate
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    function getTopDrinksEver() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/myreports?sinceDate=' + moment('1970-01-01').format('YYYY-MM-DD HH:mm:ss') + '&topValue=1'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;    
    }


    function getTopDrinksOfToday() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/myreports?sinceDate=' +  moment().subtract(24, 'hours').format('YYYY-MM-DD HH:mm:ss') + '&topValue=10'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;    
    }


    function getFavoriteJuices() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/myreports/favorit?sinceDate=' +  moment('1970-01-01').format('YYYY-MM-DD HH:mm:ss') + '&topValue=10'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    function getWorkload() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/reports/workload?sinceDate=' +  moment().startOf('day').format('YYYY-MM-DD HH:mm:ss')
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    function getRevenuePerHour() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/myreports/revenue?sinceDate=' +  moment().startOf('day').format('YYYY-MM-DD HH:mm:ss') + '&time=hour'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    function getRevenuePerDay() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: '/myreports/revenue?sinceDate=' +  moment().subtract(700, 'days').format('YYYY-MM-DD HH:mm:ss') + '&time=day'
        }).then(function(result) {
            defer.resolve(result);
        }, function(error) {
            defer.reject(error);
        });
        return defer.promise;
    }


    return {
        getDrinksByHours: getDrinksByHours,
        getTopDrinksEver: getTopDrinksEver,
        getTopDrinksOfToday: getTopDrinksOfToday,
        getFavoriteJuicesSince: getFavoriteJuices,
        getWorkloadSince: getWorkload,
        getRevenuePerHour: getRevenuePerHour,
        getRevenuePerDay: getRevenuePerDay
    };
}]);
