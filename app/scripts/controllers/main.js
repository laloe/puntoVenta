'use strict';

/**
 * @ngdoc function
 * @name puntoVentaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the puntoVentaApp
 */
angular.module('puntoVentaApp')
  .controller('MainCtrl', function($state) {
    var vm = this;
    vm.salir = salir;

    function salir() {
      $state.go('main.login');
    }
  });
