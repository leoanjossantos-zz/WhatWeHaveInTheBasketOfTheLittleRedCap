angular.module('app.services', [])
.factory('Lanches', ['$firebaseArray', function($firebaseArray) {
  var lanchesRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches');
  return $firebaseArray(lanchesRef);
}])
.factory('LancheColegaService', [function(){
  var lanche;

  var addLanche = function(newLanche) {
    lanche = newLanche;
  };

  var getLanche = function(){
    return lanche;
  };

  return {
    addLanche: addLanche,
    getLanche: getLanche
  }
}]);
