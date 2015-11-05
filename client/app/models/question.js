import DS from 'ember-data';

export default DS.Model.extend({
  QuestionId: DS.attr(),
  QuestionText: DS.attr()
});
