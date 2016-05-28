angular.module('app.controllers')
  .controller('detalheDoMeuLancheCtrl', function($scope, MeuLancheService) {
    $scope.descricaoMeuLanche = MeuLancheService.getLancheDescricao();
    $scope.fotoMeuLanche = MeuLancheService.getLancheFoto();
})
