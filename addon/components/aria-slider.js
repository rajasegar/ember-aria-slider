import Ember from 'ember';
import layout from '../templates/components/aria-slider';

export default Ember.Component.extend({
  layout,
  classNames: ['aria-widget-slider'],
  focusIn() {
    this.set('focusClass', 'focus');
  },

  focusOut() {
    this.set('focusClass', '');
  }
});
