import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/aria-slider-thumb';
import { run } from '@ember/runloop';

const RAIL_WIDTH = 300;

const THUMB_WIDTH = 8;

const KEYCODES = {
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'pageUp': 33,
  'pageDown': 34,
  'end': 35,
  'home': 36
};


export default Component.extend({
  layout,
  classNames: ['thumb'],
  classNameBindings: ['focusClass:focus'],
  attributeBindings: [
    'currentValue:aria-valuenow',
    'label:aria-label',
    'maxValue:aria-valuemax',
    'minValue:aria-valuemin',
    'role',
    'src',
    'tabindex',
    'valueText:aria-valuetext',
    'labelledBy:aria-labelledby'
  ],
  role: 'slider',
  tabindex: 0,
  focusClass: false,
  valueText: computed('currentValue', function() {
    let units = this.get('units') || '';
    let _valueText = `${this.get('currentValue')}${units}`;
    if(this.get('unitPrefix')){
      _valueText = `${units}${this.get('currentValue')}`;
    }
    return _valueText;
  }),

  keyDown(event) {
    var flag = false;

    let currentVal = this.get('currentValue');
    switch (event.keyCode) {
      case KEYCODES.left:
      case KEYCODES.down:
        this.moveSliderTo(currentVal - 1);
        flag = true;
        break;

      case KEYCODES.right:
      case KEYCODES.up:
        this.moveSliderTo(currentVal + 1);
        flag = true;
        break;

      case KEYCODES.pageDown:
        this.moveSliderTo(currentVal - 10);
        flag = true;
        break;

      case KEYCODES.pageUp:
        this.moveSliderTo(currentVal + 10);
        flag = true;
        break;

      case KEYCODES.home:
        this.moveSliderTo(this.get('minValue'));
        flag = true;
        break;

      case KEYCODES.end:
        this.moveSliderTo(this.get('maxValue'));
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }
  },

  mouseDown(e) {

    let parentNode = e.target.parentNode;
    let minValue = this.get('minValue');
    let maxValue = this.get('maxValue');

    let handleMouseMove = (event) => {

      let diffX = event.pageX - parentNode.offsetLeft;
      let valueNow = minValue + parseInt(((maxValue - minValue) * diffX) / RAIL_WIDTH);
      this.moveSliderTo(valueNow);

      event.preventDefault();
      event.stopPropagation();
    };

    var handleMouseUp = function() {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    // bind a mousemove event handler to move pointer
    document.addEventListener('mousemove', handleMouseMove);

    // bind a mouseup event handler to stop tracking mouse movements
    document.addEventListener('mouseup', handleMouseUp);

    e.preventDefault();
    e.stopPropagation();

    // Set focus to the clicked handle
    e.target.focus();
  },

  focusIn() {
    this.set('focusClass', true);
  },

  focusOut() {
    this.set('focusClass', false);
  },

  init() {
    this._super(...arguments);
    run.schedule('afterRender', () => {
      this.moveSliderTo(this.get('currentValue'));
    });
  },

  moveSliderTo(value) {
    let minValue = this.get('minValue');
    let maxValue = this.get('maxValue');
    let _value = value;

    if (value < minValue) {
      _value = minValue;
    }

    if ( value > maxValue) {
      _value = maxValue;
    }

    this.set('currentValue', _value);

    if(value < minValue || value > maxValue) {
      return;
    }
    let pos = Math.round((_value * RAIL_WIDTH) / (maxValue - minValue)) - (THUMB_WIDTH / 2);

    // console.log("pos = ", pos);
    let left = '';

    left = pos + 'px';
    // console.log("left = ", left);

    this.element.style.left = left;

  }
});
