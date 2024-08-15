import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    type: { type: String, enum: ['Graded Quiz', 'Practice Quiz', 'Graded Survey', 'Ungraded Survey'], default: 'Graded Quiz' },
    points: { type: Number, default: 0 },
    assignmentGroup: { type: String, enum: ['Quizzes', 'Exams', 'Assignments', 'Project'], default: 'Quizzes' },
    shuffleAnswers: { type: Boolean, default: true },
    timeLimit: { type: Number, default: 20 },
    multipleAttempts: { type: Boolean, default: false },
    attemptsAllowed: { type: Number, default: 1 },
    showCorrectAnswers: { type: Boolean, default: true },
    accessCode: { type: String, default: '' },
    oneQuestionAtATime: { type: Boolean, default: true },
    webcamRequired: { type: Boolean, default: false },
    lockQuestions: { type: Boolean, default: false },
    dueDate: { type: Date },
    availableDate: { type: Date },
    untilDate: { type: Date },
    published: { type: Boolean, default: false },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    //createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default quizSchema;