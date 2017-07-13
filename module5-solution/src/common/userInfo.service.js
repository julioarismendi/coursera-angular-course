(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);


function UserInfoService() {
  var service = this;

  var userInfo;
  var dishInfo;

  service.setUserInfo = function (info) {
    var item = {
      firstname: info.firstname,
      lastname: info.lastname,
      email: info.email,
      phone: info.phone,
      favoriteDish: info.favoriteDish
    };

    userInfo = item;
  };

  service.setDishInfo = function (info) {
    var item = {
      title : info.name,
      description: info.description
    };

    dishInfo = item;
  };

  service.getUserInfo = function () {
    return userInfo;
  };

  service.getDishInfo = function () {
    return dishInfo;
  };
}

})();