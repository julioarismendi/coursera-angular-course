(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['ShortNameService', 'UserInfoService'];
function SignUpController(ShortNameService, UserInfoService) {
  var ctrl = this;
  ctrl.validDish = true;

	ctrl.validShortDish = function(){
		if (ctrl.user.favoriteDish){
			var promise = ShortNameService.getShortName(ctrl.user.favoriteDish);
			return promise;			
		}		
	}

	ctrl.submit = function(){
		var promise = ctrl.validShortDish();

		promise.then(function (dish) {
			ctrl.completed = true;
			ctrl.validDish = true;
			UserInfoService.setUserInfo(ctrl.user);
			UserInfoService.setDishInfo(dish);
		})
		.catch(function (error) {
			ctrl.completed = false;
			ctrl.validDish = false;
		});
	}
}


})();