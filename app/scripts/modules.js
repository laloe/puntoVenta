'use strict';
angular
  .module('puntoVentaApp')
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    var states = [{
        name: 'main',
        data: {
          pageTitle: 'Punto de venta'
        },
        abstract: true,
        template: '<div ui-view></div>'
      },
      {
        name: 'main.home',
        data: {
          pageTitle: 'INICIO',
        },
        url: '/home',
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'main.login',
        data: {
          pageTitle: 'BIENVENIDO',
        },
        url: '/',
        templateUrl: 'views/login/login.html',
        controller: 'MainCtrl',
        controllerAs: '$ctrl'
      }
    ];


    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  });
