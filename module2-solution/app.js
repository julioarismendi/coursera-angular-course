(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuyCtrl = this;

  toBuyCtrl.items = ShoppingListCheckOffService.getItemsTobuy();

  toBuyCtrl.checkItem = function (item) {
    ShoppingListCheckOffService.markItemAsBought(item);
  }
}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBoughtCtrl = this;

  alreadyBoughtCtrl.items = ShoppingListCheckOffService.getItemsAlreadyBought();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of items to buy
  var itemsTobuy = [
    { name: "cookies", quantity: 10 },
    { name: "sodas", quantity: 10 },
    { name: "chips", quantity: 10 },
    { name: "bananas", quantity: 10 },
    { name: "apples", quantity: 10 }
  ];

  //List of items already bought
  var itemsAlreadyBought = [];

  service.markItemAsBought = function (item) {
    itemsTobuy.splice(item, 1);
    itemsAlreadyBought.push(item);
  }

  service.getItemsTobuy = function () {
    return itemsTobuy;
  }; 
  
  service.getItemsAlreadyBought = function () {
    return itemsAlreadyBought;
  };
}

})();
