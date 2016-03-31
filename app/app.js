var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('bienvenida');
    $stateProvider
    	.state('bienvenida', {
    		url: '/welcome',
    		templateUrl: '/views/bienvenida.html',
    		controller: 'NavbarController'
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
	    		controller: 'NavbarController'
	    });
			$stateProvider
				.state('perfil', {
					url: '/perfil',
					templateUrl: '/views/perfil.html',
					controller: 'ScanController'
			});
			$stateProvider
				.state('editarPerfil', {
					url: '/editarPerfil',
					templateUrl: '/views/editarPerfil.html',
					controller: 'ScanController'
			});
			$stateProvider
				.state('buscarAmigos', {
					url: '/buscarAmigos',
					templateUrl: '/views/buscarAmigos.html',
					controller: 'ScanController'
			});
			$stateProvider
				.state('audio', {
					url: '/audio',
					templateUrl: '/views/Audio.html',
					controller: 'ScanController'
			});
}]);
