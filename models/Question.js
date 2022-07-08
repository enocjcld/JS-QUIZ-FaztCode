
export class Question {

    //jsdom
    /**
     * 
     * @param {string} text this are question
     * @param {string[]} choices this are multiples posibles answers
     * @param {string} answer this is the correct answer
     */

    // Porpiadades
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    // Metodos
    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if answer is correct
     */
    correctAnswer(choice) {
        return choice == this.answer;
    }
}
