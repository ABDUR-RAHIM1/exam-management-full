import express from "express";

import authGuard from "../../midlewere/authGuard.js";
import { createPurchase, deletePurchase, getAllPurchases, getPurchaseById, updatePurchase } from "../../controller/users/purchaseController.js";

const router = express.Router();

// Create a new purchase
router.post("/purchase", authGuard, createPurchase); // ok for user

// Retrieve all purchases
router.get("/purchase", getAllPurchases); /// ok for admin

// Retrieve a specific purchase by ID
router.get("/purchase/me", authGuard, getPurchaseById);  // ok admin

// Update a purchase by ID
router.put("/purchase/:id", updatePurchase);  // not using at a time 

// Delete a purchase by ID
router.delete("/purchase/:id", deletePurchase); // not using at a time

export default router;
