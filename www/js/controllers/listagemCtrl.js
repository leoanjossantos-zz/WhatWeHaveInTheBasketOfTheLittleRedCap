angular.module('app.controllers')
  .controller('listagemCtrl', function($scope, Lanches, LancheColegaService) {
    $scope.lanches = Lanches;

      // ordenar e exibir apenas os 5 primeiros
    // $scope.ordenar = function(){
    //   var lanches [] = Lanches;
    //
    //   for(i=lanches[].length(), i>lanches.length(), i++){
    //   }
    // }

    $scope.lanches = Lanches;
    $scope.addLancheColegaToList = function(currLanche){
        LancheColegaService.addLanche(currLanche);
    };
});
