angular.module('AngularScaffold.Services').factory('BookService', ['$http',
	function($http){
		var libro = {};
		$http.defaults.withCredentials = true;
		var baseUrl = 'http://localhost:8000/';
		return {
			GetBooks: function(){
				return $http.get(baseUrl + "v1/libros");
			},
			CreateBook: function(payload){
				return $http.post(baseUrl + "v1/libros",payload);
			},
			UpdateBook: function(payload){
				console.log(libro._id);
				return $http.put(baseUrl + "v1/libros/"+libro._id,payload);
			},
			DeleteBook: function(){
				return $http.delete(baseUrl + "v1/libros/"+libro._id);
			},
			SetCurrentBook: function(currentLibro){
				libro = currentLibro;
				console.log(libro._id);
			},
			GetCurrentBook: function(){
				return libro;
			}
		};
	}
]);