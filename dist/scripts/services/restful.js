
"use strict";angular.module("sbAdminApp").factory("api",["$rootScope","$http","$cookieStore",function($rootScope,$http,$cookieStore){var parseUrl="http://52.66.81.240/api2",token=$cookieStore.get("c2cCookie");$http.defaults.headers.common.Authorization="Bearer "+token;var parseHeaders={},GenerateUrl=function(theClass,object,objectId){return object&&objectId?parseUrl+"/"+theClass+"/"+object+"/"+objectId:object?parseUrl+"/"+theClass+"/"+object:parseUrl+"/"+theClass};return{addr:function(){return parseUrl+"/"},post:function(theClass,object,data,callback){$http.post(GenerateUrl(theClass,object,!1),data,{headers:parseHeaders}).success(function(response){callback(null,response)}).error(function(response){callback(!0,response||"Cannot submit data!")})},put:function(theClass,object,objectId,data,callback){$http.put(GenerateUrl(theClass,object,objectId),data,{headers:parseHeaders}).success(function(response){callback(null,response)}).error(function(response){callback(!0,response||"There is some problem with your data.")})},get:function(theClass,object,objectId,query,callback){var config={headers:parseHeaders};query&&(config.params=query),$http.get(GenerateUrl(theClass,object,objectId),config).success(function(response){callback(null,response)}).error(function(response){callback(!0,response||"Some error occured.")})},"delete":function(theClass,object,objectId,callback){$http["delete"](GenerateUrl(theClass,object,objectId),{headers:parseHeaders}).success(function(response){callback(null,response)}).error(function(response){callback(!0,response||"Some error occured.")})}}}]);

