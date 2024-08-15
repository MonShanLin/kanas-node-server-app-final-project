import QuestionModel from "./QuestionModel.js";

export const createQuestion = async (question) => {
    return await QuestionModel.create(question);
};

export const findAllQuestions = async (quizId) => {
    return await QuestionModel.find({ quiz: quizId });
};

export const findQuestionById = async (questionId) => {
    return await QuestionModel.findById(questionId);
};

export const updateQuestion = async (questionId, question) => {
    return await QuestionModel.findByIdAndUpdate(questionId, question, { new: true });
};

export const deleteQuestion = async (questionId) => {
    return await QuestionModel.findByIdAndDelete(questionId);
};