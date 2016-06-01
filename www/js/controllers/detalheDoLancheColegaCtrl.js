angular.module('app.controllers')
  .controller('detalheDoLancheColegaCtrl', function($scope, LancheColegaService) {
    
    $scope.lancheColega = LancheColegaService.getLanche();
});
