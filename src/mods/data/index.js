import angular from 'angular';
//import ngResource from 'angular-resource';
import ngMockE2E from 'angular-mocks/ngMockE2E';

function runFun($httpBackend){
  //let user = {name:'WangDaChui'};
  let line = {
    title:{
      text:''
    },
    data:[{
                        name:'最高气温',
                        type:'line',
                        data:[11, 11, 15, 13, 12, 13, 10],
                        markPoint : {
                            data : [
                                {type : 'max', name: '最大值'},
                                {type : 'min', name: '最小值'}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name:'最低气温',
                        type:'line',
                        data:[1, -2, 2, 5, 3, 2, 0],
                        markPoint : {
                            data : [
                                {name : '周最低', value : -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine : {
                            data : [
                                {type : 'average', name : '平均值'}
                            ]
                        }
                    }]
  }
  $httpBackend
    .whenGET('/api/linechart')
    .respond(line);
}
// function runRes($resource){
//   console.log($resource);
//   return $resource(
//     '/contacts/:id',
//     {id: '@id'},
//     {
//       'update': {
//         method: 'PUT'
//       }
//     }
//   );
// }

runFun.$inject = ['$httpBackend'];
//runRes.$inject = ['$resource'];

export default angular.module('mockApp', [
  //ngResource,
  ngMockE2E
])
//.factory('Contact',runRes)
.run(runFun)
.name;
