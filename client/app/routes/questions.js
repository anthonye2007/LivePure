import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.$.getJSON('/api/v1/question');
    //return this.store.query('question');
  }
});
