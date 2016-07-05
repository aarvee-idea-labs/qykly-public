"use strict";angular.module("sbAdminApp").controller("usersCtrl",function($scope,$location,$http,api,DTOptionsBuilder,DTColumnBuilder,$filter,$compile,$state,DTDefaultOptions){function rowCallback(nRow,aData,iDisplayIndex,iDisplayIndexFull){return $("td",nRow).unbind("click"),$("td",nRow).bind("click",function(){$scope.$apply(function(){$scope.message=aData._id+" - "+aData.primaryEmail,$state.go("dashboard.moreUserDetail",{id:aData._id})})}),nRow}var url=api.addr();$scope.message="",DTDefaultOptions.setDisplayLength(100),$scope.dtOptions=DTOptionsBuilder.newOptions().withOption("ajax",{url:url+"get-user",type:"GET",data:function(aodata){"1"==aodata.draw&&(aodata.order[0].column="1",aodata.order[0].dir="desc")}}).withDataProp("data").withOption("processing",!0).withOption("serverSide",!0).withOption("rowCallback",rowCallback).withLanguage({sSearch:"Search user:",oPaginate:{sNext:"»",sPrevious:"«"}}),$scope.dtColumns=[DTColumnBuilder.newColumn("_id").withTitle("# ").renderWith(function(data,type,full,meta){return data=meta.row+1+"."}).notSortable().withOption("searchable",!1).withOption("width","2%"),DTColumnBuilder.newColumn("primaryEmail").withTitle("Email ").withClass("emailpointer"),DTColumnBuilder.newColumn("dateCreated").withTitle("dateCreated ").renderWith(function(data,type,full){return $filter("date")(data,"d MMM y, h:mm a")}).withOption("searchable",!1),DTColumnBuilder.newColumn("accessTime").withTitle("Access Time ").renderWith(function(data,type,full){return $filter("date")(data,"d MMM y, h:mm a")}).withOption("searchable",!1),DTColumnBuilder.newColumn("lastLogin").withTitle("lastLogin ").renderWith(function(data,type,full){return $filter("date")(data,"d MMM y, h:mm a")}).withOption("searchable",!1),DTColumnBuilder.newColumn("smsShortCodes").withTitle("Codes ").renderWith(function(data,type,full){return data=data.length}).notSortable().withOption("searchable",!1)]});