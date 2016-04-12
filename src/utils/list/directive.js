import angular from 'angular'
import ntpl from './index.html'

class List{
  constructor(){
    this.restrict = 'EA';
    this.replace = true;
    this.template = ntpl;
    this.scope = {
        names:'='
    };
  }
  link(scope){
      scope.names=[{name:'Tom'},{name:'Jack'},{name:'Rose'}];
      scope.changeColor = e => {
          let self = e.currentTarget;
          self.style.backgroundColor = '#f10000';
      }
      scope.reverseColor = e => {
          let self = e.currentTarget;
          self.style.backgroundColor = '#fff';
      }
  }
}

//export default function List(){
//    return {
//        restrict:'EA',
//        replace:true,
//        template:ntpl,
//        scope:{
//            names:'='
//        },
//        link:function(scope){
//            scope.names=[{name:'Tom'},{name:'Jack'},{name:'Rose'}];
//            scope.changeColor = function(e){
//                var self = e.currentTarget;
//                $(self).css('background-color','#f10000');
//            }
//        }
//    }
//}

//function List(){
//    return {
//        restrict:'EA',
//        replace:true,
//        template:ntpl,
//        scope:{
//            names:'='
//        },
//        link:scope => {
//            scope.names=[{name:'Tom'},{name:'Jack'},{name:'Rose'}];
//            scope.changeColor = e => {
//                var self = e.currentTarget;
//                $(self).css('background-color','#f10000');
//            }
//        }
//    }
//}

export default angular.module('directives.list',[])
       .directive('list',() => new List())
       .name;