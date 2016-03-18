'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardCtrl from './dashboardCtrl';
import tpl from './dashboard.html'

var config = function($stateProvider){
  $stateProvider
  .state('dashboard',{
      url:'/dashboard',
      template:tpl,
      controller:'dashboardCtrl'
  });
}
config.$inject = ['$stateProvider'];

export default angular.module('dbmod',[uiRouter])
                      .config(config)
                      .controller('dashboardCtrl',dashboardCtrl)
                      .name;
