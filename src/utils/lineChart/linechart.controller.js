/*
    linechart.service
    to get chart data and so on
*/ 
import angular from 'angular';
export default class LinechartController{
    constructor($scope,LinechartService){
        //console.log($scope.modInfo);
        this.url = $scope.modInfo.url;
        this.moduleId = $scope.modInfo.moduleId;
        this.editUrl = '/api/linechart/edit';
        this.editData = {};
        this.LinechartService = LinechartService;
        this.lineConfig = {
            theme:'default',
            dataLoaded:true
        };
        let opt = {
            title : {
                text: '',
                subtext: ''
            },
            tooltip : {
                show: false,
                trigger: 'axis'
            },
            legend: {
                show: false,
                data:['最高气温','最低气温']
            },
            calculable : true,
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['周一','周二','周三','周四','周五','周六','周日']
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    axisLabel : {
                        formatter: '{value} °C'
                    }
                }
            ],
            series : [{},{}]
        };
        //this.lineOption = angular.copy(opt);
        this.updateChartData(opt);
    }
    /*
        更新折线图数据，更新视图
    */
    updateChartData(opt){
        let that = this;
        this.LinechartService.getChartData(this.url,
                                      {"mid":this.moduleId},
                                      function(data){
            //console.log(data);
            opt.title.text = data.data.title.text;
            opt.series = data.data.data;
            that.lineOption = angular.copy(opt);
        });
    }
    /*
        获取编辑数据
    */
    openLinechartEdit(){
        let that = this;
        //console.log(this.moduleId);
        this.LinechartService.getEditData(this.editUrl,
                                        {"mid":this.moduleId},
                                        function(data){
            that.editData = data.data;
            $('#linechartEditPanel').modal('show');                                    
        });
    }
    updateLineChart(data){
        
    }
}
LinechartController.$inject = ['$scope','LinechartService'];