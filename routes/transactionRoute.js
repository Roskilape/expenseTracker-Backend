import express from "express";

import {
  deleteTransactionByDocId,
  getTransactionByUserId,
  getTransactionSummaryByUserid,
  postTransaction,
} from "../controllers/transactionController.js";

const router = express.Router();

router.post("/", postTransaction);

router.get("/:userId", getTransactionByUserId);

router.delete("/:id", deleteTransactionByDocId);

router.get("/summary/:userId", getTransactionSummaryByUserid);

export default router;
