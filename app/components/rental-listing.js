import Component from '@ember/component';
import EmberObject, { computed } from '@ember/object';


export default Component.extend({
    isWide: false,
    actions: {
        toggleImageSize(){
            this.toggleProperty('isWide');
        }
    },
});
