angular.module('app.controllers')
  .controller('listagemCtrl', function($scope, $ionicListDelegate, Lanches, $cordovaCamera) {
    $scope.lanches = Lanches;
    $scope.purchaseItem = function(lanche) {
      var lancheRef = new Firebase('https://oquetemnacestadachap.firebaseio.com/lanches/' + lanche.$id);
      lancheRef.child('status').set('purchased');
      $ionicListDelegate.closeOptionButtons();
    };

    $scope.upload = function() {
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
        $cordovaCamera.getPicture(options)
            .then(function(imageData) {
              syncArray.$add({image: imageData}).then(function() {
                alert("Image has been uploaded");
            });
        }, function(error) {
            console.error(error);
        }
      );
    }
})
