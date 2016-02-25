'use strict';

require('angular');
require('angular-route');
require('angular-local-storage');

require('./shared/filter/plainFilter');

angular.module('app', ['ngRoute', 'LocalStorageModule', 'sharedFilters']);

angular
  .module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/pages/index.html'
      })
      .when('/new', {
        templateUrl: '/templates/pages/new.html'
      })
      .when('/:id', {
        templateUrl: '/templates/pages/show.html'
      })
      .when('/:id/edit', {
        templateUrl: '/templates/pages/new.html'
      });

    $locationProvider.html5Mode(true);
    // with bound controller
    //.when('/avengers', {
    //  templateUrl: 'avengers.html',
    //  controller: 'Avengers',
    //  controllerAs: 'vm'
    //});
  });




require('./service');
//require('./controller');
require('./directive');
