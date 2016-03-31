angular.module('AngularScaffold.Controllers')
.controller('ScanController', ['$scope', 'ScanService', '$sessionStorage', '$location', function ($scope, ScanService, $sessionStorage, $location) {
  $scope.scores = [];
  $scope.user = {name:{first:undefined,last:undefined}};
  $scope.$sessionStorage = $sessionStorage;
  $scope.friends = [];
  $scope.friendUsername;
  init();

  function init(){
    for (var i = 0; i < $sessionStorage.currentUser.friends.length; i++) {
      var data = {_id: String($sessionStorage.currentUser.friends[i])};
      ScanService.GetUser(data).then(function(response){
        $scope.friends.push(response.data);
      });
    }
  }

  $scope.isAdmin = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('admin') > -1;
  }

  $scope.isRegular = function(){
    return $sessionStorage.currentUser && $sessionStorage.currentUser.scope.indexOf('regular') > -1;
  }


  $scope.getUser = function(ObjectId){
    ScanService.PostUser(ObjectId).then(function(response){
      $scope.friends.push(response.data);
    });
  }
  $scope.changeview= function(view){
    $location.path(view);
    if(view=='/audio')
      window.location.reload();
  }
  $scope.addFriend = function(){
    ScanService.addFriend({username: $scope.friendUsername}).then(function(response){
      console.log($scope.friendUsername);
      alert(response.data);
    })
    $scope.getFriends();
  }
  $scope.getFriends = function(){
    ScanService.listMyFriends($sessionStorage.currentUser).then(function(response){
      $sessionStorage.currentUser.friends = response.data;
      init();
    });
  }
  $scope.GuardarPerfil = function(){
    alert($scope.user.mail);
    $scope.user.scope="regular";
    ScanService.GuardarPerfil($scope.user).then(function(response){
    $location.path('/perfil');
    }).catch(function(err){
      alert(err.data.error + " " + err.data.message);
    });
  }
}]);
