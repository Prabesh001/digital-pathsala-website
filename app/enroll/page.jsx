"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getData } from "@/utils/api";
import { formFields } from "@/utils/formData";
import { ToastContainer } from "react-toastify";
import { CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";

export default function EnrollmentForm() {
  const [myCourse, setMyCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await getData("http://localhost:3000/api/courses");
        setMyCourse(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCourses();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      date: new Date().toLocaleDateString("en-CA"),
      address: "",
      phone: "",
      email: "",
      qualification: "see",
      course: "",
      status: "Follow Up",
      remarks: "I am interested in this class.",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:3000/api/generate-token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...data, price: selectedCourse.price }),
      });

      const result = await response.json();

      if (response.ok && result.token) {
        localStorage.setItem("token", result.token);
        router.push("/payment-process");
      } else {
        console.error(
          "Token generation failed:",
          result.error || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Request failed", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="w-[86%] p-4 sm:p-10">
      <ToastContainer />
      <div>
        <h1 className="text-2xl font-bold">Enrollment Form</h1>
        <p className="mt-2">
          Fields marked with (<span className="text-red-500">*</span>) are
          required.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="flex gap-5 flex-wrap">
          <div className="md:col-span-7 space-y-5">
            {/* Personal Details Field */}
            <div>
              <h5 className="text-red-600">
                Personal Details <span className="text-red-500">*</span>
              </h5>
              <div className="mt-2 grid md:grid-cols-2 gap-4">
                {formFields.map((field) => (
                  <div key={field.name} className="flex flex-col">
                    <label htmlFor={field.name}>
                      {field.label}{" "}
                      {field.validation && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <input
                      id={field.name}
                      {...register(field.name, field.validation || {})}
                      className="w-[250px] sm:w-full rounded-md border border-gray-400 focus:outline-blue-500 p-2"
                      placeholder={field.placeholder}
                      type={field.type || "text"}
                      readOnly={submitting}
                    />
                    {errors[field.name] && (
                      <span className="text-red-600 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-10 flex-wrap">
              {/* Qualification Field */}
              <div className="flex flex-col">
                <label htmlFor="qualification">Educational Background</label>
                <select
                  id="qualification"
                  {...register("qualification")}
                  className="w-full rounded-md border border-gray-400 p-2 focus:outline-blue-500"
                  disabled={submitting}
                >
                  <option value="see">S.E.E</option>
                  <option value="intermediate">Intermediate(+2)</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Course Field */}
              <div className="flex flex-col">
                <label htmlFor="course">
                  Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  {...register("course", { required: "Select a course" })}
                  className="w-[250px] sm:w-max rounded-md border border-gray-400 p-2 focus:outline-blue-500"
                  onChange={(e) => {
                    const course = myCourse.find(
                      (c) => c.name === e.target.value
                    );
                    setSelectedCourse(course || {});
                  }}
                  disabled={submitting}
                >
                  <option key="1" value="" disabled>
                    Select
                  </option>
                  {myCourse.map((course) => (
                    <option key={course._id} value={course.name}>
                      {course.name}
                    </option>
                  ))}
                </select>
                {errors.course && (
                  <span className="text-red-600 text-sm">
                    {errors.course.message}
                  </span>
                )}
              </div>

              <div className="w-[250px] sm:w-full -mt-4">
                <label htmlFor="remark">Message</label>
                <textarea
                  id="remark"
                  placeholder="Enter your remarks!"
                  {...register("remarks")}
                  className="w-full min-h-10 p-2 border focus:outline-blue-500 border-gray-400 rounded"
                  readOnly={submitting}
                />
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="sm:flex-1 max-w-200 min-w-65 sm:min-w-80 md:sticky top-40 z-10 pt-5">
            <div className="text-base border border-gray-400 p-5 rounded-md space-y-2 sm:space-y-5 bg-white">
              <h5 className="font-semibold">Checkout Summary</h5>
              <div>
                <h6 className="text-base font-semibold">Course</h6>
                <span className="text-slate-500">
                  {selectedCourse.name || "No course selected"}
                </span>
              </div>
              <div className="text-slate-500 flex justify-between">
                <span>Duration</span>
                <span>{selectedCourse.duration || "N/A"}</span>
              </div>

              <div className="font-bold flex justify-between">
                <span>Total Fee</span>
                <span className="text-[var(--theme)]">
                  {selectedCourse.price
                    ? `Rs.${selectedCourse.price}/-`
                    : "Rs.0/-"}
                </span>
              </div>

              <button
                type="submit"
                className={`bg-[var(--theme)] hover:bg-green-700 transition-all duration-300 w-full text-white py-2 rounded-md flex items-center justify-center gap-2 ${
                  submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={submitting}
              >
                {submitting ? (
                  <div className="flex items-center gap-2">
                    <CircularProgress size={14} color="white" /> Submitting...
                  </div>
                ) : (
                  "Proceed to Checkout"
                )}
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
