angular.module('AngularScaffold.Services').factory('ScanService', ['$http',
	function($http){
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		//var baseUrl = 'https://scan-backend.herokuapp.com/';
		return {
				PostUser: function(payload){
					return $http.post(baseUrl + "v1/register", payload);
				},
				GetUser: function(payload){
					return $http.post(baseUrl + "v1/userId", payload);
				},
				addFriend: function(payload){
					return $http.put(baseUrl + "v1/user/addFriend",payload);
				},
				listMyFriends: function(){
					return $http.get(baseUrl + "v1/user/friends");
				}
	    };
}]);
