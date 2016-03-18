class dashboardCtrl{
  constructor($scope){
    console.log($scope);
    $scope.dashboardName = 'This is dashboard!';
  }
}
dashboardCtrl.$inject = ['$scope'];
export default dashboardCtrl;
