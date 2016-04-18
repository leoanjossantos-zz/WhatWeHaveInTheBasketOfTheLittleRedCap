angular.module('app.controllers', ['ionic', 'firebase'])
.factory('Lanches', ['$firebaseArray', function($firebaseArray) {
  var lanchesRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches');
  return $firebaseArray(lanchesRef);
}])

.controller('entrarCtrl', function($scope) {
})

.controller('tirarFotoDoLancheCtrl', function($scope, $ionicListDelegate, Lanches) {

  $scope.lanches = Lanches;

  $scope.addItem = function() {
    var descricao = prompt('Descrição do lanche');
    if(descricao){
      $scope.lanches.$add({
        'descricao': descricao
      });
    }
  };

})

.controller('listagemCtrl', function($scope, $ionicListDelegate, Lanches) {
  $scope.lanches = Lanches;
  $scope.purchaseItem = function(lanche) {
    var lancheRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches/' + lanche.$id);
    lancheRef.child('status').set('purchased');
    $ionicListDelegate.closeOptionButtons();
  };

})

.controller('detalheDoLancheColegaCtrl', function($scope) {

})

.controller('detalheDoMeuLancheCtrl', function($scope) {

})
