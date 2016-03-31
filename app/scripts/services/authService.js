angular.module('AngularScaffold.Services').factory('AuthService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		//var baseUrl = 'http://localhost:8000/';
		var baseUrl = 'https://scan-backend.herokuapp.com/';
		return {
				Logout: function(){
					return $http.get(baseUrl + "v1/logout");
				},
				Login: function(payload){
					return $http.post(baseUrl + "v1/login", payload);
				},
				PostUser: function(payload){
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
