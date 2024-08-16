import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    text: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true },
    // Add other fields relevant to your question model
});

const QuestionModel = mongoose.model("Question", questionSchema);

export default QuestionModel;