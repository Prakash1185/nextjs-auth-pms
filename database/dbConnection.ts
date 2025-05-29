import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfully!");
    });
    connection.on("error", () => {
      console.log("MongoDB connection error");
      process.exit();
    });
  } catch (error) {
    console.log("Database connection error", error);
  }
};
