angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('entrar', {
    url: '/loginpage',
    templateUrl: 'templates/entrar.html',
    controller: 'entrarCtrl'
  })

  .state('tirarFotoDoLanche', {
    url: '/tirarfotolanchepage',
    templateUrl: 'templates/tirarFotoDoLanche.html',
    controller: 'tirarFotoDoLancheCtrl'
  })

  .state('listagem', {
    url: '/listagempage',
    templateUrl: 'templates/listagem.html',
    controller: 'listagemCtrl'
  })

  .state('detalheDoLancheColega', {
    url: '/detalhelanchepage',
    templateUrl: 'templates/detalheDoLancheColega.html',
    controller: 'detalheDoLancheColegaCtrl'
  })

  .state('detalheDoMeuLanche', {
    url: '/page14',
    templateUrl: 'templates/detalheDoMeuLanche.html',
    controller: 'detalheDoMeuLancheCtrl'
  })

$urlRouterProvider.otherwise('/loginpage')

  

});