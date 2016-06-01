angular.module('app.controllers')
  .controller('detalheDoMeuLancheCtrl', function($scope, MeuLancheService) {
    $scope.descricaoDoMeuLanche = MeuLancheService.getLancheDescricao();
    $scope.fotoDoMeuLanche = MeuLancheService.getLancheFoto();
});
