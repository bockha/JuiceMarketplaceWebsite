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
                    var j = 0;

                    drinks.forEach(function (dataCategory) {
                        if (!categories.includes(moment(dataCategory.date).format('YYYY-MM-DD'))) {
                            categories[j] = moment(dataCategory.date).format('YYYY-MM-DD');
                        }
                        //delete undefined values from array
                        if (!categories[j - 1]) {
                            categories.splice(j - 1, 1);
                        }
                        j++;
                    }, this);

                    /*drinks.forEach(function (revenueData) {
                        if(!techName.includes(revenueData.technologydataname)) {
                            techName[i] = revenueData.technologydataname;
                            columns[i] = new Array(revenueData.technologydataname);

                        if(moment(revenueData.date).format('YYYY-MM-DD') == categories[i]) {
                            columns[i].push(revenueData.revenue);
                    }
                        else {columns[i].push(0);}
                        }
                        i++;
                    });*/


                    drinks.forEach(function (revenueData) {
                        if (!columns.includes(revenueData.technologydataname)) {
                            if (!techName.includes(revenueData.technologydataname)) {
                                techName[i] = revenueData.technologydataname;
                                columns[i] = new Array(revenueData.technologydataname);
                                categories.forEach(function (cat) {
                                    if (techName[i] == revenueData.technologydataname && categories.includes(cat)) {
                                        columns[i].push(revenueData.revenue);
                                    }
                                    else {
                                        columns[i].push(0);
                                    }
                                }, this);
                            }
                        }
                        i++;
                    }, this);

                    $scope.revenuePerDay.data.columns = columns;
                    $scope.revenuePerDay.axis.x.categories = categories;
                    $scope.revenuePerDay.data.groups = new Array(techName);
                    $scope.revenuePerDay.data.types = types;


                    console.info("Cat: ", categories);
                    console.info("Columns: ", columns);
                    console.info("Group: ", $scope.revenuePerDay.data.groups);


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