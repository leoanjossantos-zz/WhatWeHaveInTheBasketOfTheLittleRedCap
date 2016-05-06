angular.module('app.controllers')
  .controller('listagemCtrl', function($scope, $ionicListDelegate, Lanches) {
    $scope.lanches = Lanches;
    $scope.purchaseItem = function(lanche) {
      var lancheRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches/' + lanche.$id);
      lancheRef.child('status').set('purchased');
      $ionicListDelegate.closeOptionButtons();
    };

})
