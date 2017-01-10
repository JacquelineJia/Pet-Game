var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope) {
  $scope.backgroundState= "background-image blur";
  $scope.petNameChoiceState = "petNameChoice";
  $scope.petChoiceState = "hidden";
  $scope.gameState = "hidden";

  $scope.petName = "";
  $scope.petNameMessage = "";
  $scope.checkPetName = function() {
    if ($scope.petName != "") {
      $scope.petNameChoiceState = 'hidden';
      $scope.petChoiceState = 'petChoice visible';
    } else {
      $scope.petNameMessage = 'Pet name can not be empty';
    }
  };

  $scope.petType = "";
  $scope.checkPetOption = function (type) {
    $scope.backgroundState='background-image';
    $scope.petChoiceState='hidden';
    $scope.gameState='game';
    $scope.petType = type;
  };


});
