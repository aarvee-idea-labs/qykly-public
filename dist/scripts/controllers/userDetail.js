"use strict";angular.module("sbAdminApp").controller("userDetailCtrl",function($scope,$http,$stateParams,api,DTOptionsBuilder,DTColumnBuilder,$filter,$window,$cookieStore){var id=$stateParams.id,token=(api.addr(),$cookieStore.get("c2cCookie"));$window.scrollTo(0,0),$scope.getUser=function(){api.get("get-user",id,token,!1,function(err,response){err?$scope.alert=response.message:$scope.userData=response.userdata})},$scope.getUser(),$scope.getShortcode=function(){$scope.alert="  loading.........",api.get("get-shortcode",id,token,!1,function(err,response){err?$scope.alert=response.message:($scope["new"]=response["new"],$scope.proc=response.processed,$scope.unproc=response.unprocessed,$scope.alert=!1)})},$scope.getShortcode(),$scope.countStatus=function(){api.get("get-sms-count-status",id,token,!1,function(err,response){if(err)$scope.alert=response.message;else for(var i=0;i<response.length;i++)0===response[i].status?$scope.unproCount=response[i].count:3===response[i].status&&($scope.proCount=response[i].count)})},$scope.countStatus(),$scope.getSms=function(code,status){$scope.alert="fetching "+code+" messages....",$scope.code=code,api.get("get-sms/"+id+"/"+status+"/"+code,!1,token,!1,function(err,response){err?$scope.alert=response.message:($scope.smses=response,$scope.alert=!1)})},$scope.blacklist=function(){$scope.addresses=[];for(var checkboxes=document.getElementsByName("blacklist"),i=0;i<checkboxes.length;i++)if(checkboxes[i].checked){var value=checkboxes[i].value;$scope.addresses.push(value)}api.put("blacklist",!1,token,{address:$scope.addresses},function(err,response){err?$scope.alert=response.message:($scope.alert=response.message,$scope.smses=[],$scope.getShortcode(),$scope.countStatus())})},$scope.reset=function(argument){$scope.smses=[],$scope.code=""},$scope.closeAlert=function(argument){$scope.alert=!1},$scope.sortType="saveTime",$scope.sortReverse=!1,$scope.order=function(sortType){$scope.sortReverse=$scope.sortType===sortType&&!$scope.sortReverse,$scope.sortType=sortType},$scope.parseAllSms=function(){$scope.alert="  processing.........",api.post("parsesms",!1,token,{deviceId:id},function(err,response){if(err)$scope.alert=response.message;else if(0===response.output.length)return $scope.alert="No data found";$scope.parseSmsResult=response,$scope.alert=!1})},$scope.parseSms=function(code){$scope.parseSmsResult=[],$scope.alert="processing.........",api.post("parsesmsbyshortcode",!1,token,{shortcode:code},function(err,response){err?$scope.alert=response.message:0===response.output.length&&($scope.alert="No data found"),$scope.parseSmsResult=response,$scope.alert=!1})},$scope.closeParseSmsResult=function(argument){$scope.parseSmsResult=[]},$scope.assign=function(){$scope.msgText=[];for(var checkboxes=document.getElementsByName("assign"),i=0;i<checkboxes.length;i++)if(checkboxes[i].checked){var value=checkboxes[i].value;$scope.msgText.push(value)}api.put("assign-msg",!1,token,{msgText:$scope.msgText,assignTo:$scope.assignTo.name},function(err,response){err||response.error?$scope.alert=response.message:($scope.alert=response.message,$scope.getSms($scope.code,0))})},api.get("user",!1,token,!1,function(err,response){err?$scope.alert=response.message:$scope.modusers=response})});