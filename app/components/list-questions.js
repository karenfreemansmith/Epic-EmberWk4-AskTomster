import Ember from 'ember';

export default Ember.Component.extend({
  favQuestions: Ember.inject.service(),
  actions: {
    addToFavorites(question) {
      this.get('favQuestions').add(question);
    },
    editQuestion: function(question, params) {
      this.sendAction('editQuestion', question, params);
    },
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    }
  }
});
