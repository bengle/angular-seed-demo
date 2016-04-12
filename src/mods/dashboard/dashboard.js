'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardCtrl from './dashboardCtrl';
import headerTpl from '../../public/head_nav.html';
import tpl from './dashboard.html';
import List from '../../utils/list/directive';
import DashboardServ from './dashboardServ'

//console.log(List);

var config = $stateProvider => {
  $stateProvider
  .state('dashboard',{
      url:'/dashboard',
      views:{
          'header':{
              template:headerTpl
          },
          'main':{
              template:tpl,
              controller:'dashboardCtrl'
          }
      }
  });
}
config.$inject = ['$stateProvider'];

export default angular.module('modules.dashboard',[uiRouter,List,DashboardServ])
                      .config(config)
                      .controller('dashboardCtrl',dashboardCtrl)
                      //.directive('list',List)
                      .name;
