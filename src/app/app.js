import 'bootstrap/dist/css/bootstrap.min.css';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainCtrl from './mainCtrl';
import dashboard from '../mods/dashboard/dashboard';
import headerTpl from '../public/head_nav.html';
import indexTpl from './app.html';

import mockApp from '../mods/data/index';
console.log(111);
let config = ($stateProvider,$urlRouterProvider,$locationProvider) => {
  $locationProvider.html5Mode(true);
  $stateProvider.state('default',{
    url:'/',
    views:{
        'header':{
            template:headerTpl
        },
        'main':{
            template:indexTpl
        }
    }
  });
  $urlRouterProvider.otherwise("/");
};
config.$inject = ['$stateProvider','$urlRouterProvider','$locationProvider'];
angular.module('logApp',[uiRouter,dashboard,mockApp])
      .config(config)
      .controller('mainCtrl',mainCtrl);
