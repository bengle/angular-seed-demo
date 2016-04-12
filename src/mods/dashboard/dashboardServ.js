import angular from 'angular'
class DashboardServ{
    constructor($http){}
    getSomething(){
        //$http.get();
        console.log('start get something');
        return true;
    }
}
export default angular.module('dashboard.service',[])
    .service('DashboardServ',DashboardServ)
    .name;
DashboardServ.$inject = ['$http'];