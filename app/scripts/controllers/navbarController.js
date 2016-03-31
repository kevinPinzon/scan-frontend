angular.module('AngularScaffold.Controllers')
  .controller('NavbarController', ['AuthService', '$scope', '$rootScope', '$sessionStorage', '$location', function (authService, $scope, $rootScope, $sessionStorage, $location) {
      $scope.user = {};
      $scope.$sessionStorage = $sessionStorage;

      $scope.logout = function(){
        authService.Logout().then(function(response){
          alert('logged out correctly');
          $sessionStorage.$reset();
          $location.path('/welcome');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        })
      }

      $scope.login = function(user){
        authService.Login(user).then(function(response){
          $sessionStorage.currentUser = response.data;
          console.log("name: " + $sessionStorage.currentUser.name.first + $sessionStorage.currentUser.name.last +
            "mail" + $sessionStorage.currentUser.mail);
          $scope.user = {};
          $location.path('/home');
        }).catch(function(err){
          alert(err.data.error + " " + err.data.message);
        });
      }
      $scope.register = function(){
        $location.path('/registro');
      }
  }]);
