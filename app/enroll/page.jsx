"use client";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { getData, postData } from "@/utils/api";
import { formFields } from "@/utils/formData";
import { toast, ToastContainer } from "react-toastify";

export default function EnrollmentForm() {
  const [myCourse, setMyCourse] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState({});
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const getCourses = async () => {
      try {
        const data = await getData("/api/courses");
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
    watch,
    reset,
  } = useForm({
    defaultValues: {
      fullName: "",
      address: "",
      mobileNumber: "",
      email: "",
      qualification: "",
      course: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitting(true);
    const response = await postData("/api/students", data);
    toast.isActive("Submitting")

    if (response.error) {
      toast.error(`Error occurred: ${response.error}`);
    } else {
      toast.success("Successfully submitted the form!");
      reset();
      setSelectedCourse({})
    }
    setSubmitting(false);
  };

  return (
    <section className="w-[86%] mx-auto py-10">
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold">Enrollment Form</h1>
          <p className="mt-2">
            To register, kindly complete the form below. Every field with an{" "}
            <b>Asterisks</b>(<span className="text-red-500">*</span>) must be{" "}
            <b>filled out</b>.
          </p>
        </div>

        <div className="pt-5 grid md:grid-cols-12 gap-10 md:gap-20">
          <div className="md:col-span-7 space-y-5">
            {/* Personal Details Field */}
            <div>
              <h5 className="text-red-600">
                Personal Details <span className="text-red-500">*</span>
              </h5>
              <div className="mt-2 grid md:grid-cols-2 gap-4">
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name}>
                      {field.label} <span className="text-red-500">*</span>
                    </label>
                    <input
                      id={field.name}
                      {...register(field.name, field.validation)}
                      className="w-full rounded-md border border-gray-400 focus:outline-blue-500 p-2"
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
                <label htmlFor="qualification">
                  Educational background <span className="text-red-500">*</span>
                </label>
                <select
                  id="qualification"
                  {...register("qualification", {
                    required: "Educational background is required",
                  })}
                  className="w-max rounded-md border border-gray-400 p-2 focus:outline-blue-500"
                  readOnly={submitting}
                >
                  <option value="">Select</option>
                  <option value="see">S.E.E</option>
                  <option value="intermediate">Intermediate(+2)</option>
                  <option value="bachelor">Bachelor</option>
                  <option value="master">Master</option>
                  <option value="other">Other</option>
                </select>
                {errors.qualification && (
                  <span className="text-red-600 text-sm">
                    {errors.qualification.message}
                  </span>
                )}
              </div>

              {/* Course Field */}
              <div className="flex flex-col">
                <label htmlFor="course">
                  Course <span className="text-red-500">*</span>
                </label>
                <select
                  id="course"
                  {...register("course", {
                    required: "Course selection is required",
                  })}
                  className="w-max rounded-md border border-gray-400 p-2 focus:outline-blue-500"
                  onChange={(e) => {
                    const course = myCourse.find(
                      (c) => c._id === e.target.value
                    );
                    setSelectedCourse(course || {});
                  }}
                  readOnly={submitting}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  {myCourse.map((course) => (
                    <option key={course._id} value={course._id}>
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
            </div>
          </div>

          <div className="md:col-span-5 md:sticky top-40 z-10 pt-5">
            <div className="text-base border border-gray-400 p-5 rounded-md space-y-5 bg-white">
              <h5 className="font-semibold">Checkout Summary</h5>
              <div>
                <h6 className="text-base font-semibold">Course</h6>
                <span className="text-slate-500">
                  {selectedCourse.name || "No course has been chosen"}
                </span>
              </div>
              <div className="text-slate-500 flex justify-between">
                <span>Duration</span>
                <span>{selectedCourse.duration || "N/A"}</span>
              </div>
              <div className="text-slate-500 flex justify-between">
                <span>Sub Total</span>
                <span>
                  {selectedCourse.price
                    ? `Rs.${selectedCourse.price}/-`
                    : "Rs.0/-"}
                </span>
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
                className={`bg-[var(--theme)] hover:bg-green-700 transition-all duration-300 w-full text-white py-2 rounded-md flex items-center justify-center gap-2`}
              >
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
