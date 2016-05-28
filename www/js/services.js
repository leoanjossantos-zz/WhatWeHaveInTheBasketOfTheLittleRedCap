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
}])

.factory('MeuLancheService', [function(){
  var lancheDescricao;
  var lancheFoto;

  var addMeuLanche = function(newDescricao, newFoto) {
    lancheDescricao = newDescricao;
    lancheFoto = newFoto;
  };

  var getLancheDescricao = function(){
    return lancheDescricao;
  };

  var getLancheFoto = function(){
    return lancheFoto;
  };

  return {
    addMeuLanche: addMeuLanche,
    getLancheDescricao: getLancheDescricao,
    getLancheFoto: getLancheFoto
  }
}]);
