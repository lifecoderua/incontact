'use strict';

require('angular');
require('angular-route');

angular.module('app', ['ngRoute']);

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
      .when('/edit/:id', {
        templateUrl: '/templates/pages/new.html',

      });

    $locationProvider.html5Mode(true);
    // with bound controller
    //.when('/avengers', {
    //  templateUrl: 'avengers.html',
    //  controller: 'Avengers',
    //  controllerAs: 'vm'
    //});
  });

//require('./service');
//require('./controller');
require('./directive');