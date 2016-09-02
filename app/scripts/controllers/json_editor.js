'use strict';
/**
 *
 */
angular.module('sbAdminApp').controller('jsonEditorCtrl',
	function($scope, $http, api, $sce, $window, $cookieStore) {

		$scope.closeAlert = function() {
			$scope.alert = true;
		};

		//test
        $scope.test={
            regex:[],
            ele:{f1:'f1',f2:2},
            add:function () {
                // $scope.test
            }
        };
        //test

        $scope.bill={
            regex:[],
            ele:{
                id: '',
                merchantName: '',
                pattern: '',
                msgType: '',
                address: '',
                msgSubType: '',
                runawayCount: 1,
                posMerchantAccountId: -1,
                posAmount: -1,
                posDate:-1,
                posDueDate:-1,
                dateFormat: 'dd-MMM-yyyy',
                altDateFormat:'dd/MM/yy'
            },
            add:function () {
                $scope.bill.regex.push({
                    id:$scope.bill.ele.id,
                    merchantName:$scope.bill.ele.merchantName,
                    pattern:$scope.bill.ele.pattern,
                    msgType:$scope.bill.ele.msgType,
                    address:$scope.bill.ele.address,
                    msgSubType:$scope.bill.ele.msgSubType,
                    runawayCount:$scope.bill.ele.runawayCount,
                    posMerchantAccountId:$scope.bill.ele.posMerchantAccountId,
                    posAmount:$scope.bill.ele.posAmount,
                    posDate:$scope.bill.ele.posDate,
                    posDueDate:$scope.bill.ele.posDueDate,
                    dateFormat:$scope.bill.ele.dateFormat,
                    altDateFormat:$scope.bill.ele.altDateFormat
                });
            },
            edit:function (regex) {
                var _ele=regex;
                $scope.bill.ele=_ele;
                $scope.savechanges=true;
            },
            saveChanges:function () {
                var index=$scope.bill.regex.indexOf($scope.bill.ele);
                console.log(index);
                $scope.bill.regex[index]=$scope.bill.ele;
                $scope.savechanges=false;
                // $scope.bill.ele={};
            },
            remove:function (index) {
                $scope.bill.regex.splice(index,1);
            }
        };
		$scope.purchase = {
		    regex:[],
            ele: {
                id: "",
                address: "AMAZON",
                msgType: "purchase",
                msgSubType: "order-delivered",
                merchantName: "Amazon",
                pattern: "",
                orderStatus: "Order Delivered",
                orderDate: "",
                dateFormat: "",
                posProductName: 1,
                posQuantity: -1,
                posDeliveryDetails: -1,
                posAmount: -1,
                posManageLink: -1,
                posExpectedDate: -1,
                posAwbNumber: -1,
                posDeliveryDate: -1,
                posDeliveryTime: -1,
                posShipmentId: -1,
                posOrderId: -1,
                posCourierName: -1,
                posSellerName: -1,
                posShipmentDate: -1,
                posReferenceNumber: -1,
                posPickupDate: -1,
                posProcessingDays: -1,
                posInitiationDate: -1,
                posMerchantName: -1,
                posProductDetails: -1,
                posAltExpectedDate: -1,
                Count: 0,
                dateModified: new Date(),
                dateCreated: new Date(),
                dateLastReprocessed: new Date(),
                dateReprocessSet: new Date(),
                regexDate: "",
                posReverseOrderPickupTime: -1,
                posOrderReturnReceiveDate: -1,
                posDeliveryFailReason: -1
            },
            add:function () {
                $scope.purchase.regex.push({
                    id: $scope.purchase.ele.id,
                    address: $scope.purchase.ele.address,
                    msgType: $scope.purchase.ele.msgType,
                    msgSubType: $scope.purchase.ele.msgSubType,
                    merchantName: $scope.purchase.ele.merchantName,
                    pattern: $scope.purchase.ele.pattern,
                    orderStatus: $scope.purchase.ele.orderStatus,
                    orderDate: $scope.purchase.ele.orderDate,
                    dateFormat: $scope.purchase.ele.dateFormat,
                    posProductName: $scope.purchase.ele.posProductName,
                    posQuantity: $scope.purchase.ele.posQuantity,
                    posDeliveryDetails: $scope.purchase.ele.posDeliveryDetails,
                    posAmount: $scope.purchase.ele.posAmount,
                    posManageLink: $scope.purchase.ele.posManageLink,
                    posExpectedDate: $scope.purchase.ele.posExpectedDate,
                    posAwbNumber: $scope.purchase.ele.posAwbNumber,
                    posDeliveryDate: $scope.purchase.ele.posDeliveryDate,
                    posDeliveryTime: $scope.purchase.ele.posDeliveryTime,
                    posShipmentId: $scope.purchase.ele.posShipmentId,
                    posOrderId: $scope.purchase.ele.posOrderId,
                    posCourierName: $scope.purchase.ele.posCourierName,
                    posSellerName: $scope.purchase.ele.posSellerName,
                    posShipmentDate: $scope.purchase.ele.posShipmentDate,
                    posReferenceNumber: $scope.purchase.ele.posReferenceNumber,
                    posPickupDate: $scope.purchase.ele.posPickupDate,
                    posProcessingDays: $scope.purchase.ele.posProcessingDays,
                    posInitiationDate: $scope.purchase.ele.posInitiationDate,
                    posMerchantName: $scope.purchase.ele.posMerchantName,
                    posProductDetails: $scope.purchase.ele.posProductDetails,
                    posAltExpectedDate: $scope.purchase.ele.posAltExpectedDate,
                    Count: $scope.purchase.ele.Count,
                    dateModified: $scope.purchase.ele.dateModified,
                    dateCreated: $scope.purchase.ele.dateCreated,
                    dateLastReprocessed: $scope.purchase.ele.dateLastReprocessed,
                    dateReprocessSet: $scope.purchase.ele.dateReprocessSet,
                    regexDate: $scope.purchase.ele.regexDate,
                    posReverseOrderPickupTime: $scope.purchase.ele.posReverseOrderPickupTime,
                    posOrderReturnReceiveDate: $scope.purchase.ele.posOrderReturnReceiveDate,
                    posDeliveryFailReason: $scope.purchase.ele.posDeliveryFailReason
                });
            },
            remove:function (index) {
                $scope.purchase.regex.splice(index,1);
            }
		};
		$scope.travel = {
		    regex:[],
            ele: {
                id: "",
                posBookingId: -1,
                posLink: -1,
                posDestination: -1,
                posQuantity: -1,
                posClass: -1,
                posAmount: -1,
                posEmailID: -1,
                posSeatNo: -1,
                posTotalBalance: -1,
                posPNR: -1,
                posDate: -1,
                posDuration: -1,
                posCarNumber: -1,
                posSource: -1,
                posArrivalTime: -1,
                posTime: -1,
                posStatus: -1,
                posSRN: -1,
                posSenderName: -1,
                posEndDate: -1,
                posHelpline: -1,
                posTrainId: -1,
                posCarrieName: -1,
                posCRN: -1,
                posLandMark: -1,
                posGateNo: -1,
                posReturnFlightId: -1,
                posReturnPNR: -1,
                posReturnDate: -1,
                posReturnEndDate: -1,
                posReturnSource: -1,
                posReturnDestination: -1,
                posReturnTime: -1,
                posReturnArrivalTime: -1,
                posSourceTerminal: -1,
                posDestinationTerminal: -1,
                pattern: "",
                bookingType: " ",
                merchantName: "IRCTC",
                merchantCode: "IR",
                dateFormat: "EEE MMM dd HH:mm:ss 'IST' yyyy",
                msgType: "travel",
                accountType: " ",
                address: " ",
                timeFormat: "EEE MMM dd HH:mm:ss 'IST' yyyy",
                msgSubType: " ",
                ignoreMsg: false,
                Count: 0,
                isReturn: false

            },
            add:function () {
                $scope.travel.regex.push({
                    id: $scope.travel.ele.id,
                    posBookingId: $scope.travel.ele.posBookingId,
                    posLink: $scope.travel.ele.posLink,
                    posDestination: $scope.travel.ele.posDestination,
                    posQuantity: $scope.travel.ele.posQuantity,
                    posClass: $scope.travel.ele.posClass,
                    posAmount: $scope.travel.ele.posAmount,
                    posEmailID: $scope.travel.ele.posEmailID,
                    posSeatNo: $scope.travel.ele.posSeatNo,
                    posTotalBalance: $scope.travel.ele.posTotalBalance,
                    posPNR: $scope.travel.ele.posPNR,
                    posDate: $scope.travel.ele.posDate,
                    posDuration: $scope.travel.ele.posDuration,
                    posCarNumber: $scope.travel.ele.posCarNumber,
                    posSource: $scope.travel.ele.posSource,
                    posArrivalTime: $scope.travel.ele.posArrivalTime,
                    posTime: $scope.travel.ele.posTime,
                    posStatus: $scope.travel.ele.posStatus,
                    posSRN: $scope.travel.ele.posSRN,
                    posSenderName: $scope.travel.ele.posSenderName,
                    posEndDate: $scope.travel.ele.posEndDate,
                    posHelpline: $scope.travel.ele.posHelpline,
                    posTrainId: $scope.travel.ele.posTrainId,
                    posCarrieName: $scope.travel.ele.posCarrieName,
                    posCRN: $scope.travel.ele.posCRN,
                    posLandMark: $scope.travel.ele.posLandMark,
                    posGateNo: $scope.travel.ele.posGateNo,
                    posReturnFlightId: $scope.travel.ele.posReturnFlightId,
                    posReturnPNR: $scope.travel.ele.posReturnPNR,
                    posReturnDate: $scope.travel.ele.posReturnDate,
                    posReturnEndDate: $scope.travel.ele.posReturnEndDate,
                    posReturnSource: $scope.travel.ele.posReturnSource,
                    posReturnDestination: $scope.travel.ele.posReturnDestination,
                    posReturnTime: $scope.travel.ele.posReturnTime,
                    posReturnArrivalTime: $scope.travel.ele.posReturnArrivalTime,
                    posSourceTerminal: $scope.travel.ele.posSourceTerminal,
                    posDestinationTerminal: $scope.travel.ele.posDestinationTerminal,
                    pattern: $scope.travel.ele.pattern,
                    bookingType: $scope.travel.ele.bookingType,
                    merchantName: $scope.travel.ele.merchantName,
                    merchantCode: $scope.travel.ele.merchantCode,
                    dateFormat: $scope.travel.ele.dateFormat,
                    msgType: $scope.travel.ele.msgType,
                    accountType: $scope.travel.ele.accountType,
                    address: $scope.travel.ele.address,
                    timeFormat: $scope.travel.ele.timeFormat,
                    msgSubType: $scope.travel.ele.msgSubType,
                    ignoreMsg: $scope.travel.ele.ignoreMsg,
                    Count: $scope.travel.ele.Count,
                    isReturn: $scope.travel.ele.isReturn

                });
            },
            remove:function (index) {
                $scope.travel.regex.splice(index,1);
            }

		};



	});