var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('bienvenida');
    $stateProvider
    	.state('bienvenida', {
    		url: '/welcome',
    		templateUrl: '/views/bienvenida.html',
    		controller: 'ScanController'
    	});

			$stateProvider
	    	.state('home', {
	    		url: '/home',
	    		templateUrl: '/views/home.html',
	    		controller: 'ScanController'
	    });

			$stateProvider
	    	.state('registro', {
	    		url: '/registro',
	    		templateUrl: '/views/registro.html',
	    		controller: 'ScanController'
	    });
}])
