import Ember from 'ember';
import layout from '../templates/components/aria-slider';

export default Ember.Component.extend({
  layout,
  classNames: ['aria-widget-slider'],
  focus() {
    this.set('focusClass', 'focus');
  },

  blur() {
    this.set('focusClass', '');
  }
});
