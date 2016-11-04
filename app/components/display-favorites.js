import Ember from 'ember';

export default Ember.Component.extend({
  favQuestions: Ember.inject.service(),
  actions: {
    deleteFavorite(question) {
      this.get('favQuestions').remove(question);
    },
  }
});
