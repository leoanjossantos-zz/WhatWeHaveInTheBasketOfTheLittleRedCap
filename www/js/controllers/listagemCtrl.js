angular.module('app.controllers')
  .controller('listagemCtrl', function($scope, $ionicListDelegate, Lanches, $cordovaCamera, LancheColegaService) {
    $scope.lanches = Lanches;

    $scope.callToAddToLancheList = function(currLanche){
        LancheColegaService.addLanche(currLanche);
    };

})
