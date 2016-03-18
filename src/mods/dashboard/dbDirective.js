import tpl from './dashboard.html';
class dbDirective{
  constructor(){
    this.restrict='AE';
    this.template=tpl;
    this.replace=true;
  }

}
export default dbDirective;
