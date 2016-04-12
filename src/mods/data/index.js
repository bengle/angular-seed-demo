import angular from 'angular';
//import ngResource from 'angular-resource';
import ngMockE2E from 'angular-mocks/ngMockE2E';

function runFun($httpBackend){
  let user = {name:'WangDaChui'};
  $httpBackend
    .whenGET('/api/user')
    .respond(user);
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
