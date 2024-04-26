import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connect.js";
import cors from "cors";
import todos from "./routes/todos.js";
import Todo from "./models/todo.js";

const app = express();
dotenv.config();

/* Middleware */
app.use(express.json());
app.use(cors());

/* Routes */
app.use("/api/v1/todos", todos);

/* Mongoose SETUP */
const PORT = process.env.PORT || 3001;

connectDB(process.env.MONGO_URL)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    })
  )
  .catch((error) => console.log(`${error} did not connect`));
