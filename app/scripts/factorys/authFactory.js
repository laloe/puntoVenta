angular
  .module('puntoVentaApp')
  .factory('authFactory', function($http, $q) {
    var factory = {};
    var paths = {
      datos: "images/datos.json",
    }

    factory.getDatos = function() {
      var deferred = $q.defer();
      $http.get(paths.datos).then(function(response) {
        deferred.resolve(response.data);
      }).catch(function(response) {
        deferred.reject(response);
      });

      return deferred.promise;
    };

    return factory;
  });
