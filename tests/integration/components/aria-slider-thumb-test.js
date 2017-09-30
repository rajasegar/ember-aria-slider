import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('aria-slider-thumb', 'Integration | Component | aria slider thumb', {
  integration: true
});

test('it renders', function(assert) {

  this.render(hbs`{{aria-slider-thumb}}`);

  assert.equal(this.$('[role="slider"]').length, 1);

});
