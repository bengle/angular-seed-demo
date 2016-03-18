import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainCtrl from './mainCtrl';
import dashboard from '../mods/dashboard/dashboard';
//import indexTpl from './app.html';

let config = function($stateProvider,$urlRouterProvider,$locationProvider){
  $locationProvider.html5Mode(true);
  $stateProvider.state('default',{
    url:'/',
    template:require('./app.html')
  });
  $urlRouterProvider.otherwise("/");
};
config.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
angular.module('logApp',[uiRouter,dashboard])
      .config(config)
      .controller('mainCtrl',mainCtrl);
