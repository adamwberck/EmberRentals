import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object'
import wallet from '../services/wallet';

export default Component.extend({
    wallet: service(),
    init() {
        this._super(...arguments);
      },
    
    actions: {
      handleWalletUpdate(value) {
        //this.wallet.set_balance(value);
      }
    },

});
