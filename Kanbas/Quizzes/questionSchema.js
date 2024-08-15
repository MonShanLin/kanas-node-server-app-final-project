import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    type: { type: String, enum: ['Multiple Choice', 'True/False', 'Fill in the Blank'], required: true },
    title: { type: String, required: true },
    points: { type: Number, required: true },
    question: { type: String, required: true },
    choices: [{ type: String }],  // For Multiple Choice questions
    correctAnswer: { type: String },  // Correct answer for True/False or Fill in the Blank
    quiz: { type: mongoose.Schema.Types.ObjectId, ref: 'Quiz' }
});

export default questionSchema;