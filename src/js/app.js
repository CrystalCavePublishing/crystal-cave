angular.module('crystalCave', ['templates', 'ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $stateProvider
    .state('home', {
        url: '/',
        controller: 'HomeCtrl as ctrl',
        templateUrl: 'home.html' 
    });

}]);

