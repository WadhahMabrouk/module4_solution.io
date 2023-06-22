// menudata.service.js

angular.module('data')
  .service('MenuDataService', ['$http', function($http) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
        method: 'GET',
        url: 'https://coursera-jhu-default-rtdb.firebaseio.com/categories.json'
      });
    };

    service.getItemsForCategory = function(categoryShortName) {
      return $http({
        method: 'GET',
        url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/' + categoryShortName + '.json'
      });
    };
  }]);
