"use strict";angular.module("sbAdminApp").controller("smsCtrl",function($scope,$http,api,DTOptionsBuilder,DTColumnBuilder,$filter,$window){var url=api.addr();$scope.dtOptions=DTOptionsBuilder.newOptions().withOption("ajax",{url:url+"get-message",type:"GET"}).withOption("processing",!0).withDataProp("data").withOption("serverSide",!0).withLanguage({sSearch:"Search Shortcode/message:",oPaginate:{sNext:"»",sPrevious:"«"}}).withOption("headerCallback",function(header){$window.scrollTo(0,0)}),$scope.dtColumns=[DTColumnBuilder.newColumn("_id").notVisible().withOption("searchable",!1),DTColumnBuilder.newColumn("address").withTitle("Address"),DTColumnBuilder.newColumn("text").withTitle("smsText"),DTColumnBuilder.newColumn("status").withTitle("Status ").renderWith(function(data,type,full){return 0==data?"unprocessed":3==data?"processed":1==data?"blacklisted":data}).withOption("searchable",!1),DTColumnBuilder.newColumn("time").withTitle("time ").renderWith(function(data,type,full){return $filter("date")(data,"d MMM y, h:mm a")}).withOption("searchable",!1),DTColumnBuilder.newColumn("saveTime").withTitle("saveTime ").renderWith(function(data,type,full){return $filter("date")(data,"d MMM y, h:mm a")}).withOption("searchable",!1)],api.get("summary",!1,!1,!1,function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:$scope.summary=response}),api.get("regex-summary",!1,!1,!1,function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:$scope.regexSummary=response}),$scope.assignMessage=function(){api.post("assign-message",!1,{},function(err,response){(err||response.error)&&($scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}])})},$scope.movetoDump=function(){api.put("move-to-dumb",!1,!1,{},function(err,response){})}});