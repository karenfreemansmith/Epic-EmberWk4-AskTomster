import Ember from 'ember';

export default Ember.Component.extend({
  listAnswers: false,
  actions: {
    showAnswers: function() {
      this.set('listAnswers', true);
    },
    hideAnswers: function() {
      this.set('listAnswers', false);
    }
  }
});
