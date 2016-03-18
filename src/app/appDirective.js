import tpl from './app.html';
class appDirective{
  constructor(){
    this.restrict='AE';
    this.template=tpl;
    this.replace=true;
  }
}
