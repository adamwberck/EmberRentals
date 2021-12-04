import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';
import { inject as service  } from '@ember/service';
import wallet from '../services/wallet';

export default Component.extend({
    wallet: service(),
    isWide: false,
    actions: {
        toggleImageSize(){
            this.toggleProperty('isWide');
        },
        deductFromWallet(rent){
            this.wallet.deduct_balance(Number(rent.substring(1)));
        }
    },
});
