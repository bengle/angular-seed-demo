'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardCtrl from './dashboardCtrl';
import lineChart from '../../utils/lineChart/linechart.directive';
import ModalLinechartCtrl from './modal.linechart.controller';
import headerTpl from '../../public/head_nav.html';
import tpl from './dashboard.html';
import DashboardServ from './dashboardServ';
import List from '../../utils/list/directive';
//import $uibModal from 'angular-ui-bootstrap/src/modal';

//console.log(List);

var config = $stateProvider => {
  $stateProvider
  .state('dashboard',{
      url:'/dashboard?dashId&title',
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

export default angular.module('modules.dashboard',[uiRouter,lineChart,DashboardServ,List])
                      .config(config)
                      .controller('dashboardCtrl',dashboardCtrl)
                      .controller('ModalLinechartCtrl',ModalLinechartCtrl)
                      //.directive('list',List)
                      .name;
