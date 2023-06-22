angular.module('MenuApp')
  .controller('CategoriesController', ['categoriesData', function(categoriesData) {
    var categoriesCtrl = this;
    categoriesCtrl.categories = categoriesData;
  }]);