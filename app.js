// @ts-checck
import { questions } from './data/questions.js';
import { Quiz } from './models/quiz.js';
import { UI } from './models/UI.js';


/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {ui} ui ui object
 */
const renderPage = ( quiz, ui ) => {

    if ( quiz.isEnded() ) {

        ui.showScore(quiz.score);
    } else {

        ui.showQuestion(quiz.getQuestionIndex().text);
        ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
        quiz.guess(currentChoice)
        renderPage(quiz, ui)
        });

        ui.showProgress( quiz.questionIndex + 1, quiz.questions.length );
    }
}


function main() {

    const quiz = new Quiz(questions);
    const ui = new UI();

    renderPage( quiz, ui );

}
main();