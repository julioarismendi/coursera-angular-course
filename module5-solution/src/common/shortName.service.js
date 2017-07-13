(function () {
"use strict";

angular.module('common')
.service('ShortNameService', ShortNameService);


ShortNameService.$inject = ['$http', 'ApiPathJulio'];
function ShortNameService($http, ApiPathJulio) {
  var service = this;

  service.getShortName = function (SN) {
	if(SN){
		return $http.get(ApiPathJulio + '/menu_items/'+SN+'.json')
		.then(function (response) {
	      	return response.data;
	    });
	}
    
  };

}



})();