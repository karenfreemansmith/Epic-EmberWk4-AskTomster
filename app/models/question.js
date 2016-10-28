import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  question: DS.attr(),
  details: DS.attr(),
  tomster: DS.attr()
});
