import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    let DB_CONNECTION_STRING = "";
    if (process.env.NODE_ENV === "development") {
      DB_CONNECTION_STRING = process.env.MONGO_LOCAL_URI!;
    }
    if (process.env.NODE_ENV === "production") {
      DB_CONNECTION_STRING = process.env.MONGO_URI!;
    }
    const response = await mongoose.connect(DB_CONNECTION_STRING!);
    console.log("DB connected", response.connection.host);
  } catch (error) {
    console.log("DB connect failed", error);
    process.exit(1);
  }
};
