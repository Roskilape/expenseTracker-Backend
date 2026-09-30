import rateLimit from "../config/upstash.js";

const rateLimiter = async (_req, res, next) => {
  try {
    // here we just keep it simple.
    // in a real world app you'd like to put the userId or ipAddress as your key instead of "my-rate-limit "
    const { success } = await rateLimit.limit("my-rate-limit");

    if (!success) {
      return res.status(429).json({
        message: "Too many requests, please try again later",
      });
    }
    next();
  } catch (error) {
    console.log("Rate limit error", error);
    next(error);
  }
};

export default rateLimiter;
