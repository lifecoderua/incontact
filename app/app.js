'use strict';

require('angular');
require('angular-route');

angular.module('app', ['ngRoute']);

angular
  .module('app')
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/templates/index.html'
      })
      .when('/new', {
        templateUrl: '/templates/new.html'
      });

    $locationProvider.html5Mode(true);
    // with bound controller
    //.when('/avengers', {
    //  templateUrl: 'avengers.html',
    //  controller: 'Avengers',
    //  controllerAs: 'vm'
    //});
  });




    //appRouter($routeProvider, $locationProvider));

//require('./service');
//require('./controller');
require('./directive');


function appRouter($routeProvider, $locationProvider) {
  $routeProvider
    .when('/new', {
      templateUrl: '/templates/index.html'
    })
    .when('/new', {
      templateUrl: '/templates/new.html'
    });

  // with bound controller
    //.when('/avengers', {
    //  templateUrl: 'avengers.html',
    //  controller: 'Avengers',
    //  controllerAs: 'vm'
    //});
}