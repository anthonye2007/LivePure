import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from 'client/tests/helpers/start-app';

module('Acceptance | questions', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /questions', function(assert) {
  visit('/questions');

  andThen(function() {
    assert.equal(currentURL(), '/questions');
  });
});

test('/questions should have more than one question', function(assert) {
  visit('/questions');

  andThen(function() {
    var questionTags = find('.question');
    var numberOfQuestions = questionTags.length;
    console.log('questions: ' + numberOfQuestions);
    assert.equal(numberOfQuestions, 4);
  });
});
