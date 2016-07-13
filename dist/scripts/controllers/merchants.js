"use strict";angular.module("sbAdminApp").controller("merchantsCtrl",function($scope,$http,DTOptionsBuilder,DTColumnBuilder,$compile,$filter,api,$window){function toggleAll(selectAll,selectedItems){for(var id in selectedItems)selectedItems.hasOwnProperty(id)&&(selectedItems[id]=selectAll)}function toggleOne(selectedItems){for(var id in selectedItems)if($scope.selectedMerchants.push(id),selectedItems.hasOwnProperty(id)&&!selectedItems[id])return void($scope.selectAll=!1);$scope.selectAll=!0}function reloadData(){window.location.reload()}var url=api.addr();$http({method:"GET",url:url+"get-categories"}).then(function(response){var cats=response.data.list;return $scope.categories=cats,cats},function(response){console.log("Oops, Somethings went wrong.")}),$scope.selected={},$scope.selectAll=!1,$scope.toggleAll=toggleAll,$scope.toggleOne=toggleOne,$scope.selectedMerchants=[],$scope.alert="",$scope.dtInstance={},$scope.reloadData=reloadData;var titleHtml="";$scope.dtOptions=DTOptionsBuilder.newOptions().withOption("ajax",{url:url+"get-merchants",type:"POST"}).withDataProp("data").withOption("processing",!0).withOption("serverSide",!0).withOption("createdRow",function(row,data,dataIndex){$compile(angular.element(row).contents())($scope)}).withOption("headerCallback",function(header){$window.scrollTo(0,0),$scope.headerCompiled||($scope.headerCompiled=!0,$compile(angular.element(header).contents())($scope))}).withOption("stateSave",!0),$scope.dtColumns=[DTColumnBuilder.newColumn("_id").notVisible(),DTColumnBuilder.newColumn(null).withTitle("#").renderWith(function(data,type,full,meta){return meta.settings._iDisplayStart+meta.row+1}).notSortable().withOption("searchable",!1).withOption("width","2%"),DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable().renderWith(function(data,type,full,meta){var merchant_id=JSON.stringify(data._id);return"<input ng-model='selected["+merchant_id+"]' name=chk[] class='multi-check' ng-click='toggleOne(selected)' type='checkbox'>"}),DTColumnBuilder.newColumn("name").withTitle("Merchant"),DTColumnBuilder.newColumn("Type").withTitle("Type"),DTColumnBuilder.newColumn("dateCreated").withTitle("Created").renderWith(function(data,type,full){return $filter("date")(data,"medium")}).withOption("searchable",!1),DTColumnBuilder.newColumn("dateModified").withTitle("Updated").renderWith(function(data,type,full){return $filter("date")(data,"medium")}).withOption("searchable",!1),DTColumnBuilder.newColumn("icon").notVisible(),DTColumnBuilder.newColumn("imageUrl").notVisible(),DTColumnBuilder.newColumn(null).withTitle("Category").notSortable().renderWith(function(data,type,full,meta){return'<img ng-src="'+data.icon+'" height="50" width="50" alt=""/>'}).withOption("width","5%")],$scope.changeMerchantCategory=function(){var category=angular.isUndefined($scope.merchantdata)?"":$scope.merchantdata.category,allMerchants=$scope.selected;if(""==category)return void alert("Please select category");if(0==Object.keys(allMerchants).length)return void alert("Please select merchant");var merchants=[],atleastOneSelected=!1;if(angular.forEach(allMerchants,function(value,merchant_id){value&&(this.push(merchant_id),atleastOneSelected=!0)},merchants),atleastOneSelected){var req={method:"POST",url:url+"update-merchant-category",data:{merchants:merchants,category:category}};$http(req).then(function(response){$scope.alert=response.data.Success,$scope.merchantdata.category="",reloadData(),console.log(response.data.Success)},function(response){console.log(response)})}else alert("Please select merchant")}});