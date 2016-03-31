angular.module('AngularScaffold.Services').factory('ScanService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		//var baseUrl = 'https://scan-backend.herokuapp.com/';
		return {
				PostUser: function(payload){
					return $http.post(baseUrl + "v1/register", payload);
				}
	    };
}]);
