import Service from '@ember/service';

export default Service.extend({
    balance: 0,
    
    init(){
        this._super(...arguments);
        this.set('balance',0); //needed ?
    },
    
    deduct_balance(sub){
        this.set('balance',this.balance-sub)
    }
});
