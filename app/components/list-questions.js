import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editQuestion: function(question, params) {
      this.sendAction('editQuestion', question, params);
    }
  }
});
