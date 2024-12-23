import ResultModel from "../../model/admin/resultModel.js"

const submitQuestionAndMakeResult = async (req, res) => {
    const { userId } = req;
    try {
        const {
            courseId,
            questionCategory,
            questionTitle,
            questions,
            rightAnswers,
            wrongAnswers,
            totalMark
        } = req.body;

        // Check if a submission already exists for the user, course, and title
        const existingResult = await ResultModel.findOne({
            // user: userId,
            // courseId,
            questionTitle,
            isComplete: true
        });

        if (existingResult) {
            return res.status(400).json({
                message: "You have already submitted answers for this question."
            });
        }

        // Create and save a new result
        const newResult = new ResultModel({
            user: userId,
            courseId,
            questionCategory,
            questionTitle,
            questions,
            rightAnswers,
            wrongAnswers,
            totalMark,
            isComplete: true
        });

        await newResult.save();
        res.status(201).json({
            message: "Question submitted successfully."
        });

    } catch (error) { 
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
};



const getAllResults = async (req, res) => {
    try {
        const results = await ResultModel.find()
            .populate("user", "emailPhone name")
            .sort({ createdAt: -1 });
        res.status(200).json(results)
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

const getMyResult = async (req, res) => {
    const { userId } = req
    try {
        const myResult = await ResultModel.find({ user: userId })

        if (!myResult) {
            res.status(404).json({ message: "Your Result not found!" })
        }
        res.status(200).json(myResult)

    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}


const getResultById = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await ResultModel.findById(id);

        res.status(200).json(result)


    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export { submitQuestionAndMakeResult, getAllResults, getMyResult, getResultById }