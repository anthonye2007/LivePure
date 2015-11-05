/**
* Answer.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    AnswerId: {
      type: 'integer',
      autoIncrement: 'true',
      primaryKey: 'true'
    },
    QuestionId: {
      type: 'integer',
      required: 'true'
    },
    AnswerText: {
      type: 'string',
      required: 'true'
    }
  },

  getAnswersForQuestion: function (callback) {

		// get all answers with this question id
		console.log('Entering getAnswersForQuestion')
		var questionId = 3;
		console.log('questionId: ' + questionId);

		Answer.find({ where: {QuestionId: questionId} })
      .exec(function(err, answers) {
        if (err) return callback(err);
        if (!answers) return callback(new Error('Answers not found'));
        
        console.log('found ' + answers.length + ' answers');
    		callback(answers);
      });
	}
};
