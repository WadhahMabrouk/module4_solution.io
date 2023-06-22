angular.module('MenuApp')
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Default route
    $urlRouterProvider.otherwise('/');

    // Home state
    $stateProvider.state('home', {
      url: '/',
      template: '<h1>Welcome to our Restaurant</h1>'
    });

    // Categories state
    $stateProvider.state('categories', {
      url: '/categories',
      templateUrl: 'categories.template.html',
      controller: 'categories.controller.js',
      
      resolve: {
        categoriesData: ['MenuDataService', function(MenuDataService) {
          return MenuDataService.getAllCategories()
            .then(function(response) {
              return response.data;
            })
            .catch(function(error) {
              console.log('Error retrieving categories:', error);
            });
        }]
      }
    });

    // Items state
    $stateProvider.state('items', {
      url: '/items/{categoryShortName}',
      templateUrl: 'items.template.html',
      controller: 'ItemsController as itemsCtrl',
      resolve: {
        itemsData: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName)
            .then(function(response) {
              return response.data;
            })
            .catch(function(error) {
              console.log('Error retrieving items for category:', error);
            });
        }]
      }
    });

  }]);
