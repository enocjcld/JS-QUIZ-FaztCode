export class UI {
    constructor(){}

    /**
     * @param {string} text question to render
     */
    showQuestion(text) {
        const questionTitle = document.getElementById('question');
        questionTitle.innerHTML = text;
    }

    /**
     * @param {string} choices Question choices
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');
        choicesContainer.innerHTML = ''; // This clean button

        for ( let i = 0; i < choices.length; i++ ) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));

            choicesContainer.append(button);
        }
    }

    /**
     * 
     * @param {number} score total score
     */
    showScore(score) {
        const quizEndHTML = `
            <h1>Result</h1>
            <h2>Your Score: ${ score }</h2>
        `;

        const element = document.getElementById('quiz')
        element.innerHTML = quizEndHTML;
    }

    /**
     * 
     * @param {number} currentIndex current index quiz
     * @param {number} total total  questions
     */
    showProgress( currentIndex, total ) {
        const element = document.getElementById('progress');
        element.innerHTML = `Question ${ currentIndex } of ${ total }`
    }
}