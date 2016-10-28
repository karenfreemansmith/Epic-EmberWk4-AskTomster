import Ember from 'ember';

export default Ember.Component.extend({
  answerQuestion: false,
  actions: {
    showAnswerForm: function() {
      this.set('answerQuestion', true);
    },
    saveAnswer: function() {
      var params = {
        username: this.get('username'),
        text: this.get('text')
      };
      this.set('answerQuestion', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
