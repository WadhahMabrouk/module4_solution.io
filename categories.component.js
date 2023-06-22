// categories.component.js

angular.module('MenuApp')
  .component('categories', {
    templateUrl: 'categories.template.html',
    bindings: {
      categories: '<'
    }
  });
