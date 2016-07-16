"use strict";angular.module("sbAdminApp").controller("shortcodesCtrl",function($scope,$http,api,$cookieStore,$window,DTOptionsBuilder,DTColumnBuilder,$filter){var url=api.addr();$window.scrollTo(0,0),$scope.alert="  loading.........",$scope.getShortcode=function(status){$scope.alert="  loading.........",api.get("get-codes",status,!1,!1,function(err,response){err||response.error?$scope.alert=response.userMessage||"Server error! Are you connected to the internet?.":"0"===status?($scope.unproc=response.unprocessed,$scope["new"]=response.newcode,$scope.getSms($scope.unproc[0],0),$scope.getShortcode(3)):($scope.proc=response,$scope.alert=!1)})},$scope.getShortcode("0"),$scope.getSms=function(code,status){$scope.alert="fetching "+code+" messages....",api.get("get-smss/"+code+"/"+status,!1,!1,!1,function(err,response){err||response.error?$scope.alert=response.userMessage||"Server error! Are you connected to the internet?.":($scope.code=code,$scope.smses=response,$scope.alert=!1)})},$scope.blacklist=function(){$scope.addresses=[];for(var checkboxes=document.getElementsByName("blacklist"),i=0;i<checkboxes.length;i++)if(checkboxes[i].checked){var value=checkboxes[i].value;$scope.addresses.push(value)}api.put("blacklist",!1,!1,{address:$scope.addresses},function(err,response){err||response.error?$scope.alerts=[{msg:response.userMessage||"Server error! Are you connected to the internet?.",type:"error"}]:($scope.alert=response.message,$scope.smses=[],$scope.getShortcode("0"))})},$scope.reset=function(argument){$scope.smses=[],$scope.code=""},$scope.closeAlert=function(argument){$scope.alert=!1},$scope.searchCode="",$scope.currentPage=1,$scope.pageSize=10,$scope.sortType="saveTime",$scope.sortReverse=!1,$scope.order=function(sortType){$scope.sortReverse=$scope.sortType===sortType?!$scope.sortReverse:!1,$scope.sortType=sortType},$scope.dtOptions=DTOptionsBuilder.newOptions().withOption("ajax",{url:url+"get-blacklisteds",type:"GET",data:function(aodata){"1"==aodata.draw&&(aodata.order[0].column="4",aodata.order[0].dir="desc")}}).withDataProp("data").withOption("processing",!0).withOption("serverSide",!0).withLanguage({sSearch:"Search  Blacklisted Shortcode:",oPaginate:{sNext:"»",sPrevious:"«"}}).withOption("headerCallback",function(header){$window.scrollTo(0,0)}),$scope.dtColumns=[DTColumnBuilder.newColumn("_id").notVisible().withOption("searchable",!1),DTColumnBuilder.newColumn(null).withTitle("# ").renderWith(function(data,type,full,meta){return data=meta.settings._iDisplayStart+meta.row+1}).notSortable().withOption("searchable",!1).withOption("width","2%"),DTColumnBuilder.newColumn("Sender").withTitle("Sender "),DTColumnBuilder.newColumn("Status").withTitle("Status "),DTColumnBuilder.newColumn("saveTime").withTitle("DateModified      ").renderWith(function(data,type,full){return $filter("date")(data,"d/MM/yy,h:mma")}).withOption("searchable",!1).withOption("width","20%")],$scope.parseSms=function(code){$scope.alert="  loading.........",api.put("parsesmsbyshortcode",!1,!1,{shortcode:code},function(err,response){$scope.alert=response.count+" messages parsed with "+code})}});