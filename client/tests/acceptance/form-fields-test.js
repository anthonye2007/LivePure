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

test('Reading notes should have a text area', function(assert) {
  visit('/form');

  andThen(function() {
    var readingNotes = find('#readingNotes');
    assert.ok(readingNotes.length === 1);
  });
});

test('There should be one submit button', function(assert) {
  visit('/form');

  andThen(function() {
    var submitButtons = find('button.submit');
    assert.ok(submitButtons.length === 1);
  });
});

test('Visiting /form/sendEmail should say it sent an email', function(assert) {
  visit('/form/sendEmail');

  andThen(function() {
    var emailSent = find('.emailSent');
    assert.ok(emailSent.length > 0);
  });
});
