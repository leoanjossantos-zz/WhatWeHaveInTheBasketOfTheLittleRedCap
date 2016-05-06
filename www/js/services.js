angular.module('app.services', [])

.factory('Lanches', ['$firebaseArray', function($firebaseArray) {
  var lanchesRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches');
  return $firebaseArray(lanchesRef);
}]);
