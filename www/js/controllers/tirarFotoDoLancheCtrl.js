angular.module('app.controllers')
  .controller('tirarFotoDoLancheCtrl', function($scope, $ionicListDelegate, $cordovaCamera, Lanches) {

    $scope.lanches = Lanches;

    $scope.addItem = function(lanche) {
      var descricao = lanche.descricao
      if(descricao){
        $scope.lanches.$add({
          'descricao': descricao
        });
      }
    };

    $cordovaCamera.upload = function() {
        alert("Image has been uploaded");
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
            syncArray.$add({image: imageData}).then(function() {
                alert("Image has been uploaded");
            });
        }, function(error) {
            console.error(error);
        });
    };

})
