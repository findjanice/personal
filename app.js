var app = angular.module('personal', ['ngMaterial', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'templates/home.html',
      controller: 'mainCtrl',
    })
    .when('/about', {
      templateUrl: 'templates/about.html',
      controller: 'aboutCtrl'
    })
    .when('/swyc', {
      templateUrl: 'templates/swyc.html',
      controller: 'projectCtrl'
    })
    .when('/devmtn', {
      templateUrl: 'templates/devmtn.html',
      controller: 'projectCtrl',
      css: 'swyc/register/register.css'
    })
    .when('/memorize', {
      templateUrl: 'templates/memorize.html',
      controller: 'projectCtrl'
    })
    .otherwise({
      redirectTo: '/home'
    })

  //end config
})
