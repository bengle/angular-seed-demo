export default class dashboardCtrl{
  constructor(DashboardServ){
    //console.log(DashboardServ);
    this.DashboardServ = DashboardServ;
    this.dashboardName = 'This is dashboard!';
  }
  doSomething(){
        let a = this.DashboardServ.getSomething();
        console.log(a);
  }
}
dashboardCtrl.$inject = ['DashboardServ'];
