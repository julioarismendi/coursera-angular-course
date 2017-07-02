(function () {
'use strict';

angular.module('Data')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['itemsList'];

function ItemsController(itemsList) {
  var ctrl = this;
  ctrl.itemsList = itemsList;
}

})();
