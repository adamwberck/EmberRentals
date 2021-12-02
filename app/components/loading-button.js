import Component from '@ember/component';
import { task, timeout } from 'ember-concurrency';

export default Component.extend({
    task:
        (function *waitOneSecond(params) {
            yield timeout(1000);
        }
    )
});
