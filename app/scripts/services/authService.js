angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'mongodb://admin:admin@ds015899.mlab.com:15899/';
		return {
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
        Register: function(payload){
          return $http.post(baseUrl + "v1/register", payload);
      	},
				Perfil: function(payload){
					return $http.post(baseUrl + "v1/perfil", payload);
				},
				EditarPerfil: function(payload){
					return $http.post(baseUrl + "v1/EditarPerfil", payload);
				},
				GuardarPerfil: function(payload){
					return $http.post(baseUrl + "v1/perfil", payload);
				},
				BuscarAmigos: function(payload){
					return $http.post(baseUrl + "v1/BuscarAmigos", payload);
				}
	    };
}]);
