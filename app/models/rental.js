import DS from 'ember-data';
import EmberObject, { computed } from '@ember/object';
const { Model } = DS;

export default Model.extend({
    title: DS.attr(),
    owner: DS.attr(),
    city: DS.attr(),
    category: DS.attr(),
    image: DS.attr(),
    bedrooms: DS.attr(),
    description: DS.attr(),
    rent: computed('bedrooms', 'cat', function() {
        return "$".concat(+`${this.bedrooms*500+1000}`);
    })
});
