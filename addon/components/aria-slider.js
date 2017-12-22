import Component from '@ember/component';
import layout from '../templates/components/aria-slider';

export default Component.extend({
  layout,
  classNames: ['aria-widget-slider'],
  focusIn() {
    this.set('focusClass', 'focus');
  },

  focusOut() {
    this.set('focusClass', '');
  }
});
