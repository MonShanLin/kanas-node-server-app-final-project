import * as dao from "./questionDao.js";

export default function QuestionRoutes(app) {

  const createQuestion = async (req, res) => {
    try {
      const newQuestion = await dao.createQuestion(req.body);
      res.json(newQuestion);
    } catch (error) {
      console.error("Error creating question:", error);
      res.status(500).json({ message: "Error creating question" });
    }
  };

  const findAllQuestions = async (req, res) => {
    try {
      const questions = await dao.findAllQuestions(req.params.quizId);
      res.json(questions);
    } catch (error) {
      console.error("Error finding questions:", error);
      res.status(500).json({ message: "Error finding questions" });
    }
  };

  const findQuestionById = async (req, res) => {
    try {
      const question = await dao.findQuestionById(req.params.questionId);
      if (!question) {
        res.status(404).json({ message: "Question not found" });
      } else {
        res.json(question);
      }
    } catch (error) {
      console.error("Error finding question by ID:", error);
      res.status(500).json({ message: "Error finding question by ID" });
    }
  };

  const updateQuestion = async (req, res) => {
    try {
      const { questionId } = req.params;
      const updatedQuestion = await dao.updateQuestion(questionId, req.body);
      if (!updatedQuestion) {
        res.status(404).json({ message: "Question not found" });
      } else {
        res.json(updatedQuestion);
      }
    } catch (error) {
      console.error("Error updating question:", error);
      res.status(500).json({ message: "Error updating question" });
    }
  };

  const deleteQuestion = async (req, res) => {
    try {
      const { questionId } = req.params;
      const status = await dao.deleteQuestion(questionId);
      if (status) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: "Question not found" });
      }
    } catch (error) {
      console.error("Error deleting question:", error);
      res.status(500).json({ message: "Error deleting question" });
    }
  };

 
  app.post("/api/questions", createQuestion);
  app.put("/api/questions/:questionId", updateQuestion);
  app.delete("/api/questions/:questionId", deleteQuestion);

  app.get("/api/questions/quiz/:quizId", findAllQuestions);
  app.get("/api/questions/:questionId", findQuestionById);
}

