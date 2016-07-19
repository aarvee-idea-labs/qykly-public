"use strict";angular.module("sbAdminApp").controller("userDetailCtrl",function($scope,$http,$stateParams,api,DTOptionsBuilder,DTColumnBuilder,$filter,$window){var id=$stateParams.id;api.addr();$window.scrollTo(0,0),$scope.getUser=function(){api.get("get-user",id,!1,!1,function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:$scope.userData=response.userdata})},$scope.getUser(),$scope.getShortcode=function(){$scope.alert="  loading.........",api.get("get-shortcode",id,!1,!1,function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:($scope["new"]=response["new"],$scope.proc=response.processed,$scope.unproc=response.unprocessed,$scope.alert=!1)})},$scope.getShortcode(),$scope.countStatus=function(){api.get("get-sms-count-status",id,!1,!1,function(err,response){if(err||response.error)$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}];else for(var i=0;i<response.length;i++)0===response[i].status?$scope.unproCount=response[i].count:3===response[i].status&&($scope.proCount=response[i].count)})},$scope.countStatus(),$scope.getSms=function(code,status){$scope.alert="fetching "+code+" messages....",$scope.code=code,api.get("get-sms/"+id+"/"+status+"/"+code,!1,!1,!1,function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:($scope.smses=response,$scope.alert=!1)})},$scope.blacklist=function(){$scope.addresses=[];for(var checkboxes=document.getElementsByName("blacklist"),i=0;i<checkboxes.length;i++)if(checkboxes[i].checked){var value=checkboxes[i].value;$scope.addresses.push(value)}api.put("blacklist",!1,!1,{address:$scope.addresses},function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:($scope.alert=response.message,$scope.smses=[],$scope.getShortcode(),$scope.countStatus())})},$scope.reset=function(argument){$scope.smses=[],$scope.code=""},$scope.closeAlert=function(argument){$scope.alert=!1},$scope.sortType="saveTime",$scope.sortReverse=!1,$scope.order=function(sortType){$scope.sortReverse=$scope.sortType===sortType?!$scope.sortReverse:!1,$scope.sortType=sortType},$scope.parseAllSms=function(){$scope.alert="  loading.........",api.post("parsesms",!1,{deviceId:id},function(err,response){$scope.parseSmsResult=response})},$scope.parseSms=function(code){$scope.parseSmsResult=[],$scope.alert="loading.........",api.post("parsesmsbyshortcode",!1,{shortcode:code},function(err,response){0===response.output.length&&($scope.alert="No data found"),$scope.parseSmsResult=response})}});