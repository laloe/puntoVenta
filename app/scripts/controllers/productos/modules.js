'use strict';
angular
  .module('puntoVentaApp')
  .config(function($stateProvider, $urlRouterProvider) {
    var states = [{
        name: 'main.home.productos',
        data: {
          pageTitle: 'PUNTO VENTA | PRODUCTOS'
        },
        url: '/productos',
        templateUrl: 'views/productos/productos.html',
        controller: 'ProductosCtrl',
        controllerAs: '$ctrl'
      },
      {
        name: 'main.home.nuevoProducto',
        data: {
          pageTitle: 'PUNTO VENTA | NUEVO'
        },
        url: '/nuevoProducto',
        templateUrl: 'views/productos/nuevoProducto.html',
        controller: 'NuevoProductoCtrl',
        controllerAs: '$ctrl'
      }
    ];


    states.forEach(function(state) {
      $stateProvider.state(state);
    });
  });
