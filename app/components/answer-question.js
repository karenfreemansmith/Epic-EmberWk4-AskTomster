import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    showAnswerForm: function() {
      this.set('answerQuestion', true);
    },
    saveAnswer: function() {
      this.set('answerQuestion', false);
    }
  }
});
