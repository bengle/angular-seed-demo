
export default class dashboardCtrl{
  constructor($stateParams,DashboardServ){
    this.DashboardServ = DashboardServ;
    this.dashboardName = 'This is dashboard!';
    this.modules = [
      {
        moduleType:1,
        modInfo:{
          moduleId:1,
          url:'/api/linechart'
        }
      }
    ];
    $('#J_timepicker').daterangepicker();
    var board_id = $stateParams.dashId;
    var title = $stateParams.title;
    console.log(board_id,title);
    this.names = ['tom','jack','lucky'];
    // this.getAlert = function(name){
    //   alert(name);
    // }
  }
  addLinechartPanel(){
    var that = this;
    this.DashboardServ.saveLinechartPanel(function(){
      let data = {
        moduleType:1,
        modInfo:{
          moduleId:2,
          url:'/api/linechart'
        }
      };
      that.modules.push(data);
      $('#myModal').modal('hide');
    });
  }
  updateTotalTime(e){
    var self = e.currentTarget;
    angular.element(self).val()
  }
  addModuleToPanel(type,size){
    
  }
  getAlert(name){
    //console.log(name);
    //debugger;
    alert(name);
  }
}
dashboardCtrl.$inject = ['$stateParams','DashboardServ'];
