angular.module('AngularScaffold.Controllers')
.controller('ScanController', ['$scope', 'ScanService', '$sessionStorage', '$location', function ($scope, ScanService, $sessionStorage, $location) {
  $scope.scores = [];
  $scope.user = {name:{first:undefined,last:undefined}};
  $scope.$sessionStorage = $sessionStorage;

  $scope.isAdmin = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
  }

  $scope.isRegular = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
  }

  $scope.postUser = function(){
    alert($scope.user.name.first);
    $scope.user.scope="regular";
    ScanService.PostUser($scope.user).then(function(response){
    alert("usuario creado");
    $location.path('/welcome');
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }

  $scope.changeview= function(view){
    $location.path(view);
  }

  $scope.GuardarPerfil = function(){
    alert($scope.user.name.first);
    alert($scope.user.name.last);
    alert($scope.user.mail);
    $scope.user.scope="regular";
    ScanService.GuardarPerfil($scope.user).then(function(response){
    $location.path('/perfil');
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }
}]);
