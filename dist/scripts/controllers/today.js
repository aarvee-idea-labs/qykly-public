"use strict";angular.module("sbAdminApp").controller("todayCtrl",function($scope,$http,api,$cookieStore){var token=(api.addr(),$cookieStore.get("c2cCookie"));$scope.closeAlert=function(){$scope.alert=!1},$scope.getTodaysUser=function(){var dt1=$scope.dt1.getTime(),dt2=$scope.dt2.getTime();$scope.showLoader=!0,api.post("user-shortcode-count",!1,token,{startTime:dt1,endTime:dt2},function(err,response){err?$scope.alert=response.message:($scope.appUsers=response.result,$scope.showLoader=!1)})},$scope.dt2=new Date,$scope.dateOptions={formatYear:"yy",maxDate:new Date,startingDay:1},$scope.open1=function(){$scope.popup1.opened=!0},$scope.open2=function(){$scope.popup2.opened=!0},$scope.altInputFormats=["M!/d!/yyyy"],$scope.popup1={opened:!1},$scope.popup2={opened:!1}});