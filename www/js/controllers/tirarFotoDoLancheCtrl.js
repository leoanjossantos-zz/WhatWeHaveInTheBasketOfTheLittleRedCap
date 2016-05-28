angular.module('app.controllers')
  .controller('tirarFotoDoLancheCtrl', function($scope, $ionicListDelegate, $cordovaCamera, Lanches) {

    //refatorar -> Criar service para upload de imagens
    $scope.upload = function() {
          var options = {
              quality : 75,
              destinationType : Camera.DestinationType.DATA_URL,
              sourceType : Camera.PictureSourceType.CAMERA,
              allowEdit : true,
              encodingType: Camera.EncodingType.JPEG,
              popoverOptions: CameraPopoverOptions,
              targetWidth: 500,
              targetHeight: 500,
              saveToPhotoAlbum: false
          };
          $cordovaCamera.getPicture(options).then(function(imageData) {
                $scope.imagem = imageData
          }, function(error) {
              alert("Error to generate a image");
              console.error(error);
          }
        );
      }
    $scope.upload();

    $scope.lanches = Lanches;

    $scope.addItem = function(lanche) {
      var descricao = lanche.descricao
      if(descricao){
        $scope.lanches.$add({
          'descricao': descricao,
          'imagem': $scope.imagem
        });
      }
    };

})
