import Ember from 'ember';

export default Ember.Component.extend({
  details: false,
  updateQuestion: false,
  actions: {
    saveQuestion(question) {
      var params = {
        username: this.get('username'),
        title: this.get('title'),
        details: this.get('details'),
        tomster: 'It may be so',
      };
      this.set('updateQuestion', false);
      this.sendAction('editQuestion', question, params);
    },
    showEditForm: function() {
      this.set('updateQuestion', true);
    },
    showDetails: function() {
      this.set('details', true);
    },
    hideDetails: function() {
      this.set('details', false);
    }
  }
});
