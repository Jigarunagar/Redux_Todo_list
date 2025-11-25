import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routers/todoRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB(); 

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
