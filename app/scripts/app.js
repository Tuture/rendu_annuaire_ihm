'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/projects' , {
        templateUrl: 'views/Projects/list.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .when('/roles' , {
        templateUrl: 'views/Roles/list.html',
        controller: 'RolesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
