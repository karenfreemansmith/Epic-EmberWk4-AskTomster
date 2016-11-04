import Ember from 'ember';

export default Ember.Component.extend({
  details: false,
  updateQuestion: false,
  zoeyAnswer:Ember.computed(function() {
    var zAnswer = ['Maybe not','I do not know','Your guess is as good as mine', 'It is certain', 'It is decidedly so', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don\'t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    return zAnswer[Math.floor(Math.random() * (zAnswer.length))];
  }),
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
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
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
