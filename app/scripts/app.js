'use strict';
// angular
//   .module('puntoVentaApp', [
//     'ngAnimate',
//     'ui.router',
//     'ngCookies',
//     'ngRoute',
//     'ngTouch'
//   ])
//   .config(function ($routeProvider) {
//     $routeProvider
//       .when('/', {
//         templateUrl: 'views/main.html',
//         controller: 'MainCtrl',
//         controllerAs: 'main'
//       })
//       .when('/about', {
//         templateUrl: 'views/about.html',
//         controller: 'AboutCtrl',
//         controllerAs: 'about'
//       })
//       .otherwise({
//         redirectTo: '/'
//       });
//   });
'use strict';
angular
	.module('puntoVentaApp', [
		'ngAnimate',
		'ui.router',
        'ngCookies',
        'ngRoute',
        'ngTouch'
	])
	.config(function() {

	})
	.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
	}]);
