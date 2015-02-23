'use strict';

/* Controllers */

var stockCompanyControllers = angular.module('stockCompanyControllers', []);

stockCompanyControllers.controller('CompanyListCtrl', ['$scope', '$http',
  function ($scope, $http) {
        $http({
            method: 'get',
            url: 'http://www.everybirdie.net/api/list',
            withCredentials: true
        }).
　　success(function (data) {
            $scope.companies = data;
        }).
　　error(function (data, status) {
            alert('通信エラーが発生しました');
        });
        
        $scope.orderProp = 'age';
    }]
);

stockCompanyControllers.controller('CompanyDetailCtrl', ['$scope', '$routeParams', '$http',
  function ($scope, $routeParams, $http) {
        $http({
            method: 'get',
            url: 'http://www.everybirdie.net/api/stock/' + $routeParams.companyId,
            withCredentials: true
        }).
    success(function (data, status) {
            $scope.company = data;
        }).
    error(function (data, status) {
            alert('通信エラーが発生しました');
        });
    }]
);