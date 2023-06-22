// items.component.js

angular.module('MenuApp')
  .component('items', {
    templateUrl: 'items.template.html',
    bindings: {
      items: '<'
    }
  });
