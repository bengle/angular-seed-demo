export default class mainCtrl{
  constructor($http){
    let that = this;
    that.name = 'This is homepage!';
    $http({
      method:'GET',
      url:'/api/user'
    }).then(
      function(d){that.name = d.data.name},
      function(m){console.log(m)}
    );
  }
}
