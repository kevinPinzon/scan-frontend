angular.module('AngularScaffold.Controllers')
.controller('ScanController', ['$scope', 'ScanService', '$sessionStorage', '$location', function ($scope, ScanService, $sessionStorage, $location) {
  $scope.scores = [];
  $scope.user = {};
  $scope.$sessionStorage = $sessionStorage;

  $scope.isAdmin = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
  }

  $scope.isRegular = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
  }

  $scope.postUser = function(){
    $scope.user.scope="regular";
    ScanService.PostUser($scope.user).then(function(response){
    alert("usuario creado");
    $location.path('/welcome');
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }
}]);
