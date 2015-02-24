'use strict';

/* App Module */

var app = angular.module('washinoitioshiApp', [
    'ngRoute',
    'washinoitioshiControllers'
]);

app.run(['$rootScope', '$http', function ($Scope, $http) {
    $http({
        method: 'get',
        url: '/api/users',
        withCredentials: true
    })
    .success(function (d) {
            $Scope.users = JSON.stringify(d, null, "    ");
    })
    .error(function (data, status) {
        alert('通信エラーが発生しました');
    });
}]);