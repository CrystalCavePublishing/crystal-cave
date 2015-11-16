angular.module('crystalCave', ['templates', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'HomeCtrl as ctrl',
        templateUrl: 'home.html' 
    })
    .state('about', {
        url: '/about',
        controller: 'AboutCtrl as ctrl',
        templateUrl: 'about.html' 
    })
    .state('books', {
        url: '/books',
        controller: 'BooksCtrl as ctrl',
        templateUrl: 'books.html' 
    })
    .state('contact', {
        url: '/contact',
        controller: 'ContactCtrl as ctrl',
        templateUrl: 'contact.html' 
    });

    $urlRouterProvider.otherwise('/');

}]);

