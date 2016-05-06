angular.module('app.controllers')
  .controller('tirarFotoDoLancheCtrl', function($scope, $ionicListDelegate, Lanches) {

    $scope.lanches = Lanches;

    $scope.addItem = function(lanche) {
      var descricao = lanche.descricao
      if(descricao){
        $scope.lanches.$add({
          'descricao': descricao
        });
      }
    };

})
