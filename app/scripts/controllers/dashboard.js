'use strict';
/*
* dashboard controller 
*/

angular.module("sbAdminApp",['googlechart'])
.controller("dashboardCtrl", function ($scope, $http, api, $window, $cookieStore) {
    var url = api.addr();
    var shortCodesgraphData = [];

    $scope.shortCodesData = function(argument) {
        $http({
            method: 'GET',
            url: url + 'get-most-used-shortcodes',
            headers: {
                  Accept: "application/json",
                  Authorization: $cookieStore.get('c2cCookie')
            },
            error: function(err) {
                $scope.alert = err.responseJSON.message; // body...
            }
        }).then(function successCallback(response) {
            for (var i = response.data.length - 1; i >= 0; i--) {
                var tempArr = [];
                var newTempArr = {};

                tempArr.push({'v':response.data[i]._id},{'v':response.data[i].count});
                newTempArr['c'] = tempArr;
                shortCodesgraphData.push(newTempArr);
            }
     
        }, function errorCallback(response) {
            console.log('Oops, Somethings went wrong.');
        });
    };
    $scope.shortCodesData();

    $scope.myChartObject = {};
    
    $scope.myChartObject.type = "BarChart";
    
    $scope.onions = [
        {v: "Onions"},
        {v: 3},
    ];

     $scope.myChartObject.data = {"cols": [
        {id: "t", label: "Sender code", type: "string"},
        {id: "s", label: "Count", type: "number"}
    ], "rows": shortCodesgraphData};
    $scope.myChartObject.options = {
        'title': 'Top 10 sender codes'
    };
});