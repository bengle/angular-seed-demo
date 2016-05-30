import angular from 'angular';
class LinechartService{
    constructor($http){
        this.$http = $http;
    }
    getChartData(url,params,callback){
        this.$http({
            url:url,
            data:params,
            method:'GET'
        }).then(function successCallback(data){
            callback(data);
        },function errorCallback(data){
            alert(data.message);
        });
    }
    getEditData(url,params,callback){
        this.$http({
            url:url,
            data:params,
            method:'GET'
        }).then(function successCallback(data){
            callback(data);
        },function errorCallback(data){
            alert(data.message);
        });
    }
}
LinechartService.$inject = ['$http'];
export default angular.module('linechart.service',[])
    .service('LinechartService',LinechartService)
    .name;