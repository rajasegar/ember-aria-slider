# ember-aria-slider

[![Build Status](https://travis-ci.org/rajasegar/ember-aria-slider.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-slider) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-slider/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-slider?branch=master)
[![npm](https://img.shields.io/npm/dm/ember-aria-slider.svg)](https://www.npmjs.com/package/ember-aria-slider)
[![npm version](http://img.shields.io/npm/v/ember-aria-slider.svg?style=flat)](https://npmjs.org/package/ember-aria-slider "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-slider/status.svg)](https://david-dm.org/rajasegar/ember-aria-slider)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-slider/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-slider?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-slider.svg?branch=master)](http://emberobserver.com/addons/ember-aria-slider)

An Ember Slider addon based on WAI-ARIA Authoring practices.
For more info, click [here](https://www.w3.org/TR/wai-aria-practices/#slider)

## Demo

[Demo](http://rajasegar.github.io/ember-aria-slider/)


## Installation

* `ember install ember-aria-slider`


## Usage
Example Markup:

```hbs
{{aria-slider
      minValue=0
      maxValue=255
      currentValue=50
    }}
```

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
