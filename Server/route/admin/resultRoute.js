
import express from "express"
import { submitQuestionAndMakeResult, getAllResults, getMyResult, getResultById } from "../../controller/admin/resultController.js";
import authGuard from "../../midlewere/authGuard.js";

const router = express.Router();

router.post("/submit_question", authGuard, submitQuestionAndMakeResult) // ok - submit question and make result
router.get("/get/all", getAllResults);
router.get("/get/me", authGuard, getMyResult);  // only authenticate user and his result 
router.get("/get/:id", getResultById);  // public route


export default router