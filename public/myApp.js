var app = angular.module('myApp', ['ngAnimate']);

app.controller('myCtrl', function ($scope) {
  $scope.backgroundState= "background-image blur";
  $scope.petNameChoiceState = "petNameChoice";
  $scope.petChoiceState = "hidden";
  $scope.gameState = "hidden";
  $scope.petState = "pet";

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

  var petType = "";
  var petImg = "";
  var holding = "";
  var firstBite = false;

  $scope.checkPetOption = function (type) {
    $scope.backgroundState='background-image';
    $scope.petChoiceState='hidden';
    $scope.gameState='game';
    petType = type;
    $scope.petType = petType;
    petImg = "public/images/" + petType + ".png";
    $scope.petImg = petImg;
    $scope.petPos = petType + " petPos";
    $scope.petBox = petType + "Box" + " petPos";
  };

  $scope.petNormal = function () {
    petImg = "public/images/" + petType + ".png";
    $scope.petImg = petImg;
  };

  $scope.petMouseOver = function () {
    if ($scope.showFood == true) {
      petImg = "public/images/" + petType + "-eat.png";
    } else {
      petImg = "public/images/" + petType + "-happy.png";
    }
    $scope.petImg = petImg;
  };

  $scope.mouseMove = function ($event) {
    $scope.x = $event.clientX + "px";
    $scope.y = $event.clientY + "px";
  };

  $scope.showFood = false;
  $scope.pickFood = function (food) {
    if ($scope.showFood == true) {
      $scope.showFood = false;
    } else if ($scope.showFood == false) {
      $scope.showFood = true;
      holding = food;
      $scope.foodImg = "public/images/" + holding + ".png";
      firstBite = false;
    }
  };

  $scope.petClick = function () {
    if ($scope.showFood == true) {
      if (firstBite == false) {
        $scope.foodImg = "public/images/" + holding + "-eat.png";
        firstBite = true;
      } else if (firstBite == true) {
          $scope.showFood = false;
      }

    }
  };

});
