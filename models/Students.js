import mongoose, { model, models } from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    course: {
      type: String,
      required: [true, "Course name is required"],
      trim: true,
    },
    courseId: {
      type: String,
      trim: true,
    },
    courseType: {
      type: String,
      enum: ["Online", "Offline"],
    },
    fullName: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [3, "Full name must be at least 3 characters long"],
    },
    email: {
      type: String,
    },
    qualification: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    mobileNumber: {
      type: String,
      required: [true, "Mobile number is required"],
      match: [/^\d{10}$/, "Invalid mobile number format"], // Ensuring 10-digit number
    },
    message: {
      type: String,
      trim: true,
      default: "I am interested in this course.",
    },
    educationBackground: {
      type: String,
    },
    fees: {
      type: Number,
    },
    classTime: {
      type: String,
    },
    classGroupId: {
      type: String,
    },
  },
  { timestamps: true}
);

const Student = models.Student || model("Students", studentSchema);
export default Student;
