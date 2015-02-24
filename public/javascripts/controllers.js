'use strict';

/* Controllers */

var controllers = angular.module('washinoitioshiControllers', []);

controllers.controller('users', ['$scope', '$http',
    function ($scope, $http) {
        $http({
            method: 'get',
            url: '/api/users',
            withCredentials: true
        }).
　　    success(function (data) {
            $scope.users = data;
        }).
　　    error(function (data, status) {
            alert('通信エラーが発生しました');
        });
        $scope.orderProp = 'age';
    }]
);
