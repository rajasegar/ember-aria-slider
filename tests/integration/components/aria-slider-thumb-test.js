import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import { focus, find, triggerEvent } from 'ember-native-dom-helpers';

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

function triggerKeyboardEvent(el, keyCode) {
  var eventObj = document.createEventObject ?
      document.createEventObject() : document.createEvent("Events");

  if(eventObj.initEvent){
    eventObj.initEvent("keydown", true, true);
  }

  eventObj.keyCode = keyCode;
  eventObj.which = keyCode;

  el.dispatchEvent ? el.dispatchEvent(eventObj) : el.fireEvent("onkeydown", eventObj);

}

module('Integration | Component | aria slider thumb', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    await render(hbs`{{aria-slider-thumb}}`);

    assert.equal(findAll('[role="slider"]').length, 1);

  });

  test('it should increment current value when right-arrow is pressed', async function(assert) {
    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.right);
    assert.equal(this.get('currentValue'), 51);

  });

  test('it should increment current value when up-arrow is pressed', async function(assert) {
    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.up);
    assert.equal(this.get('currentValue'), 51);

  });


  test('it should decrement current value when left-arrow is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.left);
    assert.equal(this.get('currentValue'), 49);

  });

  test('it should decrement current value when down-arrow is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.down);
    assert.equal(this.get('currentValue'), 49);

  });

  test('it should increment current value by 10 when page-up is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.pageUp);
    assert.equal(this.get('currentValue'), 60);

  });

  test('it should decrement current value by 10 when page-down is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    // await focus('.thumb');
    triggerKeyboardEvent(find('.thumb'), KEYCODES.pageDown);
    assert.equal(this.get('currentValue'), 40);

  });

  test('it should set current value to minValue when HOME is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    triggerKeyboardEvent(find('.thumb'), KEYCODES.home);
    assert.equal(this.get('currentValue'), 0);

  });

  test('it should set current value to maxValue when END is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    triggerKeyboardEvent(find('.thumb'), KEYCODES.end);
    assert.equal(this.get('currentValue'), 100);

  });

  test('it should do nothing when any other key is pressed', async function(assert) {

    this.set('currentValue', 50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 50);
    triggerKeyboardEvent(find('.thumb'), 41);
    assert.equal(this.get('currentValue'), 50);

  });


  test('it should set current value to minValue when currentValue < minValue', async function(assert) {

    this.set('currentValue', -50);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 0);

  });

  test('it should set current value to maxValue when currentValue > maxValue', async function(assert) {

    this.set('currentValue', 500);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 100);

  });

  test('it should set aria-valuetext with units specified along with prefix set', async function(assert) {

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=50
      units='$'
      unitPrefix=true
    }}`);

    assert.equal(findAll('[aria-valuetext="$50"]').length, 1);
  });

  test('it should set aria-valuetext with units specified without prefix set', async function(assert) {

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=50
      units='$'
    }}`);

    assert.equal(findAll('[aria-valuetext="50$"]').length, 1);
  });

  test('it should set current value on mouse move event', async function(assert) {
    this.set('currentValue', 0);

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=currentValue
    }}`);

    assert.equal(this.get('currentValue'), 0);
    await triggerEvent('.thumb', 'mousedown');
    await triggerEvent('.thumb', 'mousemove', { pageX: 10 });
    await triggerEvent('.thumb', 'mouseup');
    assert.notEqual(this.get('currentValue'), 0);
  });

  test('it should have focus class if focus set', async function(assert) {

    await render(hbs`{{aria-slider-thumb
      minValue=0
      maxValue=100
      currentValue=50
    }}<div id="otherElement" tabindex="1"></div>`);


    assert.notOk(find('.focus'));
    await focus('.thumb');
    assert.ok(find('.focus'));
    await focus('#otherElement');
    assert.notOk(find('.focus'));
  });
});
