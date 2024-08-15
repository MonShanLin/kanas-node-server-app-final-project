// /Users/phoebelin/kanbas-node-server-app/Kanbas/Quizzes/quizDao.js
import QuizModel from "./QuizModel.js";

export const createQuiz = async (quiz) => {
    delete quiz._id
    return await QuizModel.create(quiz);
};

export const findAllQuizzes = async (courseId) => {
    return await QuizModel.find({ course: courseId }).populate('questions');
};

export const findQuizById = async (quizId) => {
    return await QuizModel.findById(quizId).populate('questions');
};

export const updateQuiz = async (quizId, quiz) => {
    return await QuizModel.findByIdAndUpdate(quizId, quiz, { new: true });
};

export const deleteQuiz = async (quizId) => {
    return await QuizModel.findByIdAndDelete(quizId);
};
