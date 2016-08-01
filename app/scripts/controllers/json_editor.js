'use strict';
/**
 * 
 */
angular.module('sbAdminApp').controller('jsonEditorCtrl',
	function($scope, $http, api, $sce, $window, $cookieStore) {



		$scope.closeAlert = function(argument) {
			$scope.alert = true;
		};

		$scope.success = function() {
			console.log('Copied!');
		};

		$scope.fail = function(err) {
			console.error('Error!', err);
		};

		// var travel = {};
		$scope.purchase = {
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
			id: "",
			posReverseOrderPickupTime: -1,
			posOrderReturnReceiveDate: -1,
			posDeliveryFailReason: -1,
		};


		$scope.travel = {
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
			isReturn: false,
			id: ""

		};



	});