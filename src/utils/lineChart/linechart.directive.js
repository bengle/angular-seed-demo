import './linechart.less';
import angular from 'angular';
import 'ng-echarts/dist/ng-echarts.min';
import tpl from './linechart.html';
import linechartController from './linechart.controller';
import LinechartService from './linechart.service';

class LineChart{
  constructor(){
    this.restrict = 'EA';
    this.replace = true;
    this.template = tpl;
    this.controller = 'linechartController';
    this.controllerAs = 'lc';
    this.scope = {
        modInfo:'=modinfo'
    };
  }
}

export default angular.module('linechart.directive',[LinechartService,'ng-echarts'])
       .controller('linechartController',linechartController)
       .directive('lineChart',() => new LineChart())
       .name;