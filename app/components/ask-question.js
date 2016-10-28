import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    showQuestionForm: function() {
      this.set('askQuestion', true);
    },
    saveQuestion: function() {
      this.set('askQuestion', false);
    }
  }
});
