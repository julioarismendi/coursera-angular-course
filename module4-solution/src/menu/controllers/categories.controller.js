(function () {
'use strict';

angular.module('Data')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categoryItems'];

function CategoriesController(categoryItems) {
  var categoryList = this;
  categoryList.categoryItems = categoryItems;
}

})();
