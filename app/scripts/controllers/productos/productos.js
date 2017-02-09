'use strict';
angular.module('puntoVentaApp')
  .controller('ProductosCtrl', function(authFactory) {
    var vm = this;
    init();

    function init() {
      authFactory.getDatos().then(function(data) {
        vm.tabla = data.marcadores;
      });
    }
  });
