import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
    waitOneSecond: task(function* () {
        yield timeout(1000);   
    })
});
