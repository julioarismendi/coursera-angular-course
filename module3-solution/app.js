(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.itemSearched = "";
  ctrl.found = [];
  ctrl.showMessage = false;

  ctrl.getMenuList = function () {

    if (ctrl.itemSearched) {
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.itemSearched);

      promise.then(function (list) {
        ctrl.found = list;
      })
      .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

    }else{
      ctrl.found = [];
      ctrl.showMessage = true;
    }
  }

  ctrl.onRemove = function (itemIndex) {
    ctrl.found.splice(itemIndex, 1);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (itemSearched) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
    }).then(function (result) {
      // process result and only keep items that match
      var returnedItems = result.data.menu_items;
      var foundItems = [];

      angular.forEach(returnedItems, function(value, key){
        if (value.description.indexOf(itemSearched) != -1){
          foundItems.push(value);
        }
      });
      return foundItems;
    });

    return response;
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'itemsList.html',
    scope: {
      list: '<',
      onRemove: '&'
    } 
  };

  return ddo;
}

})();
