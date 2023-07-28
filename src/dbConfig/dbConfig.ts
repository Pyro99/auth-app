import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose
      .connect(process.env.MONGO_URI!)
      .then(() => console.log("MongoDB connected successfully"));
  } catch (err) {
    console.log("Something went wrong!!");
    console.log(err);
  }
}
