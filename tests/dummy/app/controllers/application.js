import Controller from '@ember/controller';
import { computed } from '@ember/object';
import toHex from '../utils/to-hex';

export default Controller.extend({
  red: 0,
  green: 0,
  blue: 0,
  style: computed('red','green','blue', function() {
    
return `background-color: rgb(${this.get('red')}, ${this.get('green')}, ${this.get('blue')})`;
  }),
  rgb: computed('red', 'green', 'blue', function() {
    return `${this.get('red')}, ${this.get('green')}, ${this.get('blue')}`;
  }),
  hex: computed('red', 'green', 'blue', function() {
    let red = toHex(this.get('red'));
    let green = toHex(this.get('green'));
    let blue = toHex(this.get('blue'));
    return `#${red}${green}${blue}`;
  })
});
