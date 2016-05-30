export default class ModalLinechartCtrl{
    constructor($uibModalInstance){
        this.$uibModalInstance = $uibModalInstance;
    }
    cancel(){
        this.$uibModalInstance.dismiss('close');
    }
    ok(){
        
        this.$uibModalInstance.dismiss('close');
    }
}
ModalLinechartCtrl.$inject = ['$uibModalInstance'];