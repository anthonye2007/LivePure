/**
 * QuestionController
 *
 * @description :: Server-side logic for managing questions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	getAnswers: function(req, res) {
		Answer.getAnswersForQuestion(function(answers) {
			console.log('Back in controller');
			return res.send(JSON.stringify(answers));
		});
	}
};
