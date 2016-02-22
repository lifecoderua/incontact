'use strict';

require('angular');

angular.module('app', []);

angular.module('app').controller('MainController', function($scope) {
  $scope.message = 'Angular 1 Works!'
});


//require('./service');
//require('./controller');
require('./directive');