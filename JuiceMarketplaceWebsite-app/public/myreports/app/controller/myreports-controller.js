angular
    .module('myreports')
    .controller('MyReportsController', ['$scope', '$timeout', 'c3SimpleService', 'MyReportsDataService',
        function ($scope, $timeout, c3SimpleService, MyReportsDataService) {

            $scope.revenuePerDay = {
                size: {
                    height: 350,
                    width: 1000
                },
                data: {
                    columns: [],
                    types: {
                        data: 'area-spline'
                        // 'line', 'spline', 'step', 'area', 'area-step' are also                        available to stack
                    },
                    groups: []

                },
                axis: {
                    x: {
                        label: 'Day',
                        type: 'category',
                        categories: [],
                    },
                    y: {
                        label: 'Revenue',
                        padding: {
                            bottom: 2
                        }
                    }
                },
                legend: {
                    show: true
                }
            };

            $scope.clickEvent = function (datum, mouseEvent) {
                $scope.chart.data.hide.push(datum.id);
            };

            $scope.getDrinksByHours = function (hours) {
                MyReportsDataService.getDrinksByHours(hours).then(function (data) {
                    var drinks = data.data;
                    $scope.getactivatedlicensessince = drinks[0].getactivatedlicensessinceforuser;
                }, function (error) {
                    console.log(error);
                });
            }


           $scope.getTopDrinkNameEver = function () {
                MyReportsDataService.getTopDrinksEver().then(function (data) {
                    var drinks = data.data;
                    $scope.topEverName = drinks[0].technologydataname;
                }, function (error) {
                    console.log(error);
                });
            }



            $scope.getTotalRevenueForUser = function () {
                MyReportsDataService.getTotalRevenueForUser().then(function (data) {
                    var drinks = data.data;
                    var totalRev = drinks[0].revenue;
                    $scope.totalRevenue = Number(totalRev).toFixed(2)
                }, function (error) {
                    console.log(error);
                });
            }

            $scope.getRevenueForToday = function () {
                MyReportsDataService.getRevenueForToday().then(function (data) {

                    var revenue = data.data.revenue;
                    if(!revenue) {
                        revenue = 0;
                    }
                    $scope.revenueToday = Number(revenue).toFixed(2);
                });
            }

            $scope.getRevenuePerDayForUser = function () {
                MyReportsDataService.getRevenuePerDayForUser().then(function (data) {
                    var drinks = data.data;
                    console.info(drinks);
                    var columns = [];
                    var revenue = [];

                    var i = 0;
                    drinks.forEach(function (revenueData) {
                        columns[i] = revenueData.technologydataname + ',' + revenueData.revenue;
                        i++;
                    });

                    console.info("Name: ", columns);
                    console.info("Revenue: ", revenue);

                }, function (error) {
                    console.log(error);
                });
            }

            var getData = function () {
                $scope.getDrinksByHours(5);
                /*$scope.getTopDrinksOfToday();
                $scope.getFavoriteJuicesSince();
                $scope.getWorkloadSince();*/
                $scope.getRevenuePerDayForUser();
                $scope.getTopDrinkNameEver();
                $scope.getRevenueForToday();
                $scope.getTotalRevenueForUser();
                nextLoad();
            }

            var loadTime = 6000000;
            var loadPromise; //Pointer to the promise created by the Angular $timout service

            var cancelNextLoad = function () {
                $timeout.cancel(loadPromise);
            };

            var nextLoad = function () {
                //Always make sure the last timeout is cleared before starting a new one
                cancelNextLoad();
                loadPromise = $timeout(getData, loadTime);
            };

            //Start polling the data from the server
            getData();

            //Always clear the timeout when the view is destroyed, otherwise it will keep polling
            $scope.$on('$destroy', function () {
                cancelNextLoad();
            });
        }]);