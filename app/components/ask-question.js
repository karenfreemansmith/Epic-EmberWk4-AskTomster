import Ember from 'ember';

export default Ember.Component.extend({
  askQuestion: false,
  actions: {
    showQuestionForm: function() {
      this.set('askQuestion', true);
    },
    saveQuestion: function() {
      var params = {
        username: this.get('username') ? this.get('username') : "",
        title: this.get('title') ? this.get('title') : "",
        details: this.get('details') ? this.get('details') : "",
        tomster: 'It may be so',
      };
      this.set('askQuestion', false);
      this.sendAction('saveQuestion', params);
    }
  }
});
