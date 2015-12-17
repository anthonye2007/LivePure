import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'client/tests/helpers/start-app';

module('Acceptance | form-fields', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /form', function(assert) {
  visit('/form');

  andThen(function() {
    assert.equal(currentURL(), '/form');
  });
});

test('a form field for score should exist', function(assert) {
  visit('/form');

  andThen(function() {
    var scoreTags = find('#score');
    assert.ok(scoreTags.length >= 1);
  });
});

test('score should have an input box', function(assert) {
  visit('/form');

  andThen(function() {
    var inputs = find('input');
    assert.ok(inputs.length >= 1);
  });
});
