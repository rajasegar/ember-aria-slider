import { module, skip, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find, focus } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import a11yAudit from 'ember-a11y-testing/test-support/audit';


module('Integration | Component | aria slider', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('.aria-widget-slider').length, 1);
  });

  test('it should have rail element', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('.rail').length, 1);
  });

  test('it should have an element with role=slider', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('[role="slider"]').length, 1);
  });

  test('it should have an element with tabindex=0', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('[tabindex="0"]').length, 1);
  });

  test('it should have a thumb element', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('.thumb').length, 1);
  });

  test('it should have an aria-valuemin attribute', async function(assert) {
    await render(hbs`{{aria-slider minValue=0}}`);
    assert.equal(findAll('[aria-valuemin="0"]').length, 1);
  });

  test('it should have an aria-valuemax attribute', async function(assert) {
    await render(hbs`{{aria-slider maxValue=100}}`);
    assert.equal(findAll('[aria-valuemax="100"]').length, 1);
  });

  test('it should have an aria-valuenow attribute', async function(assert) {
    await render(hbs`{{aria-slider currentValue=50}}`);
    assert.equal(findAll('[aria-valuenow="50"]').length, 1);
  });

  test('it should have an aria-labelledby attribute', async function(assert) {
    await render(hbs`{{aria-slider labelledBy="labelHello"}}`);
    assert.equal(findAll('[aria-labelledby="labelHello"]').length, 1);
  });

  test('it should have a value element', async function(assert) {
    await render(hbs`{{aria-slider}}`);
    assert.equal(findAll('.value').length, 1);
  });

  test('it should have a value=currentValue', async function(assert) {
    await render(hbs`{{aria-slider currentValue=50}}`);
    assert.equal(find('.value').textContent.trim(), '50');
  });

  skip('it should have focus class if focus set', async function(assert) {

    this.render(hbs`{{aria-slider
      minValue=0
      maxValue=100
      currentValue=50
    }}<div id="otherElement" tabindex="1"></div>`);

    assert.notOk(find('.rail.focus'));
    await focus('.rail');
    assert.ok(find('.rail.focus'));
    await focus('#otherElement');
    assert.notOk(find('.rail.focus'));
  });

  skip('accessibility check', async function (assert) {
    await render(hbs`{{aria-slider
      minValue=0
      maxValue=100
      currentValue=50
    }}<div id="otherElement" tabindex="0"></div>`);


    await a11yAudit();
    assert.ok(true, 'no a11y errors found!');
  });
});
