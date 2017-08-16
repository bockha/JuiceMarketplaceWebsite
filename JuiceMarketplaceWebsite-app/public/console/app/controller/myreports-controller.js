angular
    .module('myreports')
    .controller('MyReportsController', ['$scope', '$timeout', 'c3SimpleService', 'MyReportsDataService',
        function ($scope, $timeout, c3SimpleService, MyReportsDataService) {

            $scope.revenuePerDay = {
                size: {
                    height: 250,
                    width: 750
                },
                data: {
                    columns: [],
                    types: {},
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
                        },
                        inner: true
                    }
                },
                legend: {
                    show: true
                }
            };

            $scope.topEver = {
                size: {
                    height: 100,
                    width: 600
                },
                padding: {
                    top: 0,
                    right: 50,
                    bottom: 40,
                    left: 180
                },
                data: {
                    x: 'x',
                    columns: [],
                    type: 'bar'
                },
                axis: {
                    rotated: true,
                    x: {
                        type: 'category'
                    },
                    y: {show:false}

                },
                legend: {
                    show: false
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
                    var categories = [];
                    var columns = [];
                    var techName = [];
                    var types = [];
                    var i = 0;
                    var count = 0;

                    //Get Categories
                   drinks.forEach(function (revenueData) {
                       //Get Categories for X-Axis
                       if(!categories.includes(moment(revenueData.date).format('YYYY-MM-DD'))) {
                           categories.push(moment(revenueData.date).format('YYYY-MM-DD'));
                       }
                       i++;
                   }, this);

                   //Get TechnologyDataName
                   i = 0;
                   drinks.forEach(function (revData) {
                       if(!techName.includes(revData.technologydataname)) {
                           techName.push(revData.technologydataname);
                           columns.push(new Array(revData.technologydataname));
                           types.push(new Array(revData.technologydataname));
                       }
                       i++;
                   }, this);

                   //Create types
                   i = 0;
                   var test = new Object();
                   techName.forEach(function (name) {
                       if(name == "Benchmark") {
                            test[name] = "line";
                       }
                       else {
                           test[name] = "area";
                       }
                       i++;
                   },this);

                   // Get Revenue
                   drinks.forEach(function (revData) {
                       count=0;
                       techName.forEach(function (tName) {
                           if(tName == revData.technologydataname) {
                               columns[count].push(revData.revenue);
                           }
                           count++;
                       }, this);
                   }, this);

                   var index;
                   //Create Groups without Benchmark
                    techName.forEach(function (name) {
                        if(name == "Benchmark") {
                            index = techName.indexOf(name)
                            techName.splice(index,1);
                        }
                    }, this);

                    $scope.revenuePerDay.data.columns = columns;
                    $scope.revenuePerDay.axis.x.categories = categories;
                    $scope.revenuePerDay.data.groups = new Array(techName);
                    $scope.revenuePerDay.data.types =  test;


                }, function (error) {
                    console.log(error);
                });
            }

            $scope.getTopDrinksEver = function () {
                MyReportsDataService.getTopDrinksEver().then(function (data) {
                    var drinks = data.data;
                    drinks.sort(function (a, b) {
                        return b.rank - a.rank;
                    });
                    $scope.topEver.data.columns = [];

                    var keys = ['x'];
                    var values = ['value'];

                    drinks.forEach(function (drink) {
                        keys.push(drink.technologydataname);
                        values.push(drink.rank);
                    }, this);

                    $scope.topEver.data.columns.push(keys);
                    $scope.topEver.data.columns.push(values);

                }, function (error) {
                    console.log(error);
                });
            }

            var getData = function () {
                $scope.getDrinksByHours(5);
                /*$scope.getTopDrinksOfToday();
                 $scope.getFavoriteJuicesSince();
                 $scope.getWorkloadSince();*/
                $scope.getTopDrinksEver();
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