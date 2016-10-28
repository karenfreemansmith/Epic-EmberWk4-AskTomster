import DS from 'ember-data';

export default DS.Model.extend({
  username: DS.attr(),
  title: DS.attr(),
  details: DS.attr(),
  tomster: DS.attr(),
  answers: DS.hasMany('answers', {async: true})
});
