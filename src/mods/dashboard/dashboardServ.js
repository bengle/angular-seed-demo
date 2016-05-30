import angular from 'angular';
class DashboardServ{
    constructor($http){
        this.$http = $http;
    }
    saveLinechartPanel(callback){
        //console.log(111);
        callback();
    }
}
export default angular.module('dashboard.service',[])
    .service('DashboardServ',DashboardServ)
    .name;
DashboardServ.$inject = ['$http'];