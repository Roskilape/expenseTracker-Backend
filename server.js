import express from "express";
import job from "./config/cron.js";
import rateLimiter from "./middleware/rateLimiter.js";
import transactionRoute from "./routes/transactionRoute.js";
import { initDB } from "./config/db.js";

const app = express();
if (process.env.NODE_ENV === "production") job.start();
//middleware
app.use(rateLimiter);
app.use(express.json());

const PORT = process.env.PORT || 5001;

app.get("/api/health", (res, req)=> {
res.status(200).json({ status: "ok" })
})

app.use("/api/transactions", transactionRoute);

initDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server is up and running on PORT:", PORT);
  });
});
