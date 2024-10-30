import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";

// Import your routes and middleware
import authenticateToken from "./middleware/authenticateToken";
import exampleRouter from "./routes/exampleRoute";
import gptresponseRouter from "./routes/gptresponseRoute";
import loginRouter from "./routes/loginRoute";
import registerRouter from "./routes/registerRoute";
import strategyRouter from "./routes/strategyRoute";
import submitFormRouter from "./routes/submitFormRoute";
import usersRouter from "./routes/usersRoute";

// Initialize dotenv to load environment variables
dotenv.config();

// Create the Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/gptresponse", gptresponseRouter);
app.use("/strategy", strategyRouter);
app.use("/submitForm", submitFormRouter);
app.use("/login", loginRouter);
app.use("/register", registerRouter);
app.use(authenticateToken);
app.use("/users", usersRouter);

// Get the PORT from environment variables
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

export default app;
