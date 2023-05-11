import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      required: true,
      type: String,
      min: 2,
      max: 100,
    },

    email: {
      required: true,
      type: String,
      max: 50,
      unique: true,
    },

    password: {
      required: true,
      type: String,
      min: 5,
    },

    role: {
      required: true,
      type: String,
      enum: ["user", "admin", "superadmin"],
      default: "admin",
    },
  },

  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
