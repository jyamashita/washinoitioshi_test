'use strict';

/* App Module */

var stockCompanyApp = angular.module('stockCompanyApp', [
    'ngRoute',
    'stockCompanyControllers'
]);

stockCompanyApp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
      when('/list', {
            templateUrl: 'partials/company-list.html',
            controller: 'CompanyListCtrl'
        }).
      when('/stock/:companyId', {
            templateUrl: 'partials/company-detail.html',
            controller: 'CompanyDetailCtrl'
        }).
      otherwise({
            redirectTo: '/list'
        });
    }
]);