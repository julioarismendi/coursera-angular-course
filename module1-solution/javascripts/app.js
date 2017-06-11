(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.placeHolderAnswer = "";

  $scope.checkHowMuch = function () {
    if ($scope.lunchMenu == "") {
      $scope.placeHolderAnswer = "Please enter data first";
    } else {
      var lunchArray = $scope.lunchMenu.split(',');
      var lunchLength = lunchArray.length;

      if (lunchLength <= 3) {
        $scope.placeHolderAnswer = "Enjoy!";
      } else {
        $scope.placeHolderAnswer = "Too much!";
      }
    };
  }
}

})();