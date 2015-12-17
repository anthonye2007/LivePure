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
