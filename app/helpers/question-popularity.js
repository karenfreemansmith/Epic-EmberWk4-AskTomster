import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length')< 1) {
    return Ember.String.htmlSafe('<i class="fa fa-file-o" aria-hidden="true"></i>');
  } else if (question.get('answers').get('length') > 6) {
    return Ember.String.htmlSafe('<i class="fa fa-line-chart" aria-hidden="true"></i>');
  }

}

export default Ember.Helper.helper(questionPopularity);
