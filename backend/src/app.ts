import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./db/connectDB";
import errorHandler from "./middlewares/errorHandler";
import authRoutes from "./routes/auth.route";
import productRoutes from "./routes/product.route";
dotenv.config({
  path: ".env",
});

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(json());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api", productRoutes);
const PORT = process.env.PORT || 4123;

app.use(errorHandler);
app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running at port ${PORT}`);
});
