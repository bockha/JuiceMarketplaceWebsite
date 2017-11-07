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
                    groups: [],
                    empty: { label: { text: "Keine Daten vorhanden" }
                    }

                    },
                axis: {
                    x: {
                        label: 'Datum',
                        type: 'category',
                        categories: [],
                        tick: {
                            fit: true,
                            outer: false,
                            culling: {max:6}
                        }

                    },
                    y: {
                        label: 'Umsatz',
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
                    height: 150,
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
                    type: 'bar',
                    empty: { label: { text: "Keine Daten vorhanden" }}
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

            $scope.getTopRecipeName = function () {
                MyReportsDataService.getTopRecipeName().then(function (data) {

                    if(!data || !data.data[0]) {
                        $scope.topEverName = 'Keine Daten';
                    }
                    else {
                        $scope.topEverName = data.data[0].technologydataname;
                    }

                }, function (error) {
                    console.log(error);
                });
            }

            $scope.getTotalRevenueForUser = function () {
                MyReportsDataService.getTotalRevenueForUser().then(function (data) {
                    var drinks = data.data;
                    var totalRev = drinks[0].revenue;

                    if (!totalRev) {
                        totalRevenue = 0;
                    }
                    $scope.totalRevenue = Number(totalRev).toFixed(2)
                }, function (error) {
                    console.log(error);
                });
            }

            $scope.getRevenueForUserToday = function () {
                MyReportsDataService.getRevenueForUserToday().then(function (data) {

                    var revenue;

                    if(!data || !data.data[0]) {
                        revenue = 0;
                    }
                    else {
                        revenue = data.data[0].revenue;
                    }

                    $scope.revenueToday = Number(revenue).toFixed(2);
                });
            }

            $scope.getRevenuePerRecipeForUser = function () {
               MyReportsDataService.getRevenuePerRecipeForUser().then(function (data) {
                    var drinks = data.data;
                    var categories = [];
                    var columns = [];
                    var techName = [];
                    var types = [];
                    var i = 0;
                    var count = 0;
                    //categories.push(moment('2017-01-01').format('YYYY-MM-DD'));

                    //Get Categories
                   drinks.forEach(function (revenueData) {
                       //Get Categories for X-Axis
                       if(!myIncludes(categories, moment(revenueData.date).format('YYYY-MM-DD'))) {
                           categories.push(moment(revenueData.date).format('YYYY-MM-DD'));
                       }
                       i++;
                   }, this);

                   //Get TechnologyDataName
                   i = 0;
                   drinks.forEach(function (revData) {
                       if(!myIncludes(techName, revData.technologydataname)) {
                           techName.push(revData.technologydataname);
                           columns.push(new Array(revData.technologydataname));
                           types.push(new Array(revData.technologydataname));
                       }
                       i++;
                   }, this);

                   //Create types
                   i = 0;
                   var type = new Object();
                   techName.forEach(function (name) {
                       if(name == "Benchmark") {
                           type[name] = "line";
                       }
                       else {
                           type[name] = "area";
                       }
                       i++;
                   },this);

                   // Get Revenue
                   drinks.forEach(function (revData) {
                       count=0;
                       techName.forEach(function (tName) {
                           if(tName == revData.technologydataname) {
                               //if(count == 0) { columns[count].push('0');}
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
                    console.info("Cat: ", categories);
                    console.info("Col: ", columns);
                    $scope.revenuePerDay.data.columns = columns;
                    $scope.revenuePerDay.axis.x.categories = categories;
                    $scope.revenuePerDay.data.groups = new Array(techName);
                    $scope.revenuePerDay.data.types =  type;

                }, function (error) {
                    console.log(error);
                });
            }

            $scope.getTopRecipes = function () {
                MyReportsDataService.getTopRecipes().then(function (data) {
                    var drinks = data.data;
                    drinks.sort(function (a, b) {
                        return b.amount - a.amount;
                    });
                    $scope.topEver.data.columns = [];

                    var keys = ['x'];
                    var values = ['value'];

                    drinks.forEach(function (drink) {
                        keys.push(drink.technologydataname);
                        values.push(drink.amount);
                    }, this);

                    $scope.topEver.data.columns.push(keys);
                    $scope.topEver.data.columns.push(values);

                }, function (error) {
                    console.log(error);
                });
            }

            var getData = function () {
                $scope.getRevenuePerRecipeForUser();
                $scope.getTopRecipeName();
                $scope.getTopRecipes();
                $scope.getRevenueForUserToday();
                $scope.getTotalRevenueForUser();
                nextLoad();
            }

            var loadTime = 30000;
            var loadPromise; //Pointer to the promise created by the Angular $timout service

            var cancelNextLoad = function () {
                $timeout.cancel(loadPromise);
            };

            var nextLoad = function () {
                //Always make sure the last timeout is cleared before starting a new one
                cancelNextLoad();
                loadPromise = $timeout(getData, loadTime);
            };

            var myIncludes = function includes(container, value) {
                var returnValue = false;
                var pos = container.indexOf(value);
                if (pos >= 0) {
                    returnValue = true;
                }
                return returnValue;
            };

            //Start polling the data from the server
            getData();

            //Always clear the timeout when the view is destroyed, otherwise it will keep polling
            $scope.$on('$destroy', function () {
                cancelNextLoad();
            });
        }]);