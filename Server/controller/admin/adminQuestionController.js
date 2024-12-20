import QuestionModel from "../../model/admin/adminQustionModel.js";

const createQuestion = async (req, res) => {
    try {
        const { questionCategory, questionTitle, course, examDate, examTime, questions } = req.body;
        
        // Validation
        if (!questionCategory || !questionTitle || !course || !examDate || !examTime || !questions || questions.length === 0) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        // Create new Question Data
        const newQuestionData = new QuestionModel({
            questionCategory,
            questionTitle,
            course,
            examDate,
            examTime,
            questions,
        });

        // Save to database
        const savedData = await newQuestionData.save();
        return res.status(201).json({
            message: "Question added successfully!",
            data: savedData,
        });
    } catch (error) {
        return res.status(500).json({ 
            message: "Failed to add question data",
            error: error.message,
        });
    }
};


const getAllQuestion = async (req, res) => {
    try {
        const questionData = await QuestionModel.find();
        return res.status(200).json(questionData);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch question data",
            error: error.message,
        });
    }
};

const getQuestionById = async (req, res) => {
    try {
        const { id } = req.params;
        const questionData = await QuestionModel.findById(id);

        if (!questionData) {
            return res.status(404).json({
                message: "Question data not found",
            });
        }

        return res.status(200).json(questionData);
    } catch (error) {
        return res.status(500).json({
            message: "Failed to fetch question data",
            error: error.message,
        });
    }
};

/// use after
const updateQuestion = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;

        const questionData = await QuestionModel.findByIdAndUpdate(id, updatedData, {
            new: true, // Return the updated document
            runValidators: true, // Apply schema validation
        });

        if (!questionData) {
            return res.status(404).json({
                message: "Question data not found",
            });
        }

        return res.status(200).json({
            message: "Question data updated successfully!",
            data: questionData,
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update question data",
            error: error.message,
        });
    }
};

const deleteQuestion = async (req, res) => {
    try {
        const { id } = req.params;

        const questionData = await QuestionModel.findByIdAndDelete(id);

        if (!questionData) {
            return res.status(404).json({
                message: "Question not found",
            });
        }

        return res.status(200).json({
            message: "Question deleted successfully!",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete question",
            error: error.message,
        });
    }
};

export {
    createQuestion,
    getAllQuestion,
    getQuestionById,
    updateQuestion,
    deleteQuestion
}