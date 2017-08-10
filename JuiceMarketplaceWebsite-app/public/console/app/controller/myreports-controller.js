angular
    .module('myreports')
    .controller('MyReportsController', ['$scope', '$timeout', 'c3SimpleService', 'MyReportsDataService',
        function ($scope, $timeout, c3SimpleService, MyReportsDataService) {

            $scope.revenuePerDay = {
                size: {
                    height: 350,
                    width: 1150
                },
                data: {
                    columns: [],
                    type: 'area',
                    groups: []
                },
                axis: {
                    x: {
                        label: 'Date',
                        type: 'category',
                        categories: []
                    },
                    y: {
                        label: 'Revenue',
                        padding: {
                            bottom: 0
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
                console.log("START-Controller 2");
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
                    if (!revenue) {
                        revenue = 0;
                    }
                    $scope.revenueToday = Number(revenue).toFixed(2);
                });
            }

            $scope.getRevenuePerDayForUser = function () {
               MyReportsDataService.getRevenuePerDayForUser().then(function (data) {
                    var drinks = data.data;
                    console.info(drinks);
                    var categories = [];
                    var columns = [];
                    var techName = [];
                    var types = [];
                    var i = 0;
                    var count = 0;

                    drinks.forEach(function(catData){
                        //Create Categories
                        if(!categories.includes(catData.date)) {
                            //count different categories
                            categories[count] = catData.date;
                            count++;
                        }
                        i++;
                    }, this);

                    //Reset i and count
                    i = 0;
                    count = 0;
                    drinks.forEach(function(colData){
                        //Create Columns Head;
                        if(!techName.includes(colData.technologydataname)) {
                            techName[count] = new Array(colData.technologydataname);
                            count++;
                        }
                        i++
                    }, this);

                    /*$scope.revenuePerDay.data.columns = columns;
                    $scope.revenuePerDay.axis.x.categories = categories;
                    $scope.revenuePerDay.data.groups = new Array(techName);
                    $scope.revenuePerDay.data.types = types;*/


                    console.info("Cat: ", categories);
                    console.info
                    console.info("Columns: ", columns);
                    console.info("Group: ", $scope.revenuePerDay.data.groups);


                }, function (error) {
                    console.log(error);
                });
            }

            var getData = function () {
                console.log("START-Controller 2");
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
            console.log("START-Controller 2");
            getData();

            //Always clear the timeout when the view is destroyed, otherwise it will keep polling
            $scope.$on('$destroy', function () {
                cancelNextLoad();
            });
        }]);