"use strict";angular.module("sbAdminApp").controller("loginCtrl",function($scope,$location,$http,$cookieStore,api){$cookieStore.remove("c2cCookie"),$scope.login=function(){return $scope.username?$scope.password?void api.post("login",!1,!1,{username:$scope.username,password:$scope.password},function(err,response){$scope.success=!0,$scope.message=response.message,response.data&&($location.path("/dashboard/users"),$cookieStore.put("c2cCookie",response.data.authToken))}):void($scope.message="please enter password"):void($scope.message="please enter username")}});