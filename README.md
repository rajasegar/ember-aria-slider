# ember-aria-slider

[![Build Status](https://travis-ci.org/rajasegar/ember-aria-slider.svg?branch=master)](https://travis-ci.org/rajasegar/ember-aria-slider) 
[![Coverage Status](https://coveralls.io/repos/github/rajasegar/ember-aria-slider/badge.svg?branch=master)](https://coveralls.io/github/rajasegar/ember-aria-slider?branch=master)
[![npm version](http://img.shields.io/npm/v/ember-aria-slider.svg?style=flat)](https://npmjs.org/package/ember-aria-slider "View this project on npm")
[![dependencies Status](https://david-dm.org/rajasegar/ember-aria-slider/status.svg)](https://david-dm.org/rajasegar/ember-aria-slider)
[![devDependencies Status](https://david-dm.org/rajasegar/ember-aria-slider/dev-status.svg)](https://david-dm.org/rajasegar/ember-aria-slider?type=dev)
[![EmberObserver](http://emberobserver.com/badges/ember-aria-slider.svg?branch=master)](http://emberobserver.com/addons/ember-aria-slider)

An Ember Slider addon based on WAI-ARIA Authoring practices.
For more info, click [here](https://www.w3.org/TR/wai-aria-practices/#slider)


### Tutorial
There is also a tutorial available [here](http://hangaroundtheweb.com/2018/01/how-to-create-an-accessible-slider-component-in-ember/) to learn how to create this addon from scratch.

## Demo

[Demo](http://rajasegar.github.io/ember-aria-slider/)

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------


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

## Properties

### minValue [ NUMBER ]
Minimum value for the slider

### maxValue [ NUMBER ]
Minimum value for the slider

### currentValue [ NUMBER ]
Current value for the slider 

## Class Diagram
![Class Diagram](https://raw.githubusercontent.com/rajasegar/ember-aria-slider/master/pum/class-diagram.png)

## Component interface

![Component Interface](https://raw.githubusercontent.com/rajasegar/ember-aria-slider/master/pum/component.png)

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests
See the [Contributing](CONTRIBUTING.md) guide for details.


* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
