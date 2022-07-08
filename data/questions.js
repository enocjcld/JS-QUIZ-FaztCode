import { Question } from "../models/Question.js";
import { data } from "./data.js";

export const questions = data.map(
    (question) => 
    new Question(question.question, question.choices, question.answer))

/**
 * map explanation
 * [1, 2, 3].map(x => x + 10)
 * (3)[11, 12, 13]
 */