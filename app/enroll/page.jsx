"use client";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import { courses, formFields } from "@/utils/formData";

export default function EnrollmentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    defaultValues: {
      courseId: null,
      classGroupId: null,
      fullname: "",
      address: "",
      whatsapp: "",
      email: "",
      qualification: "",
    },
  });

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [selectedClassGroup, setSelectedClassGroup] = useState(null);

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    // Add your submission logic here
  };

  const watchCourseId = watch("courseId");

  return (
    <section className="w-[86%] mx-auto py-10">
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
            <div className="space-y-5">
              <div>
                <h5 className="text-red-600">
                  Choose a Course <span className="text-red-500">*</span>
                </h5>
                <div className="grid md:grid-cols-2 gap-5 mt-2">
                  {courses.map((course) => (
                    <label
                      key={course.id}
                      className={`border rounded-lg p-3 text-xs border-gray-300 flex flex-col cursor-pointer transition-all ${
                        watchCourseId === course.id ? "bg-blue-100" : ""
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            {...register("courseId", {
                              required: "Please select a course",
                            })}
                            value={course.id}
                            className="hidden"
                            id={`course-${course.id}`}
                          />
                          <div className="flex-grow">
                            <div className="flex items-center justify-between gap-1">
                              <h1 className="text-sm font-bold">
                                {course.name}
                              </h1>
                              <span className="font-semibold">
                                Rs. {course.price}/-
                              </span>
                            </div>
                            <div>
                              <span>Seats: {course.seat} left</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
                {errors.courseId && (
                  <span className="text-red-600 text-sm">
                    {errors.courseId.message}
                  </span>
                )}
              </div>

              {watchCourseId && (
                <div>
                  <h5 className="text-red-600">
                    Choose Your Preferred Time{" "}
                    <span className="text-red-500">*</span>
                  </h5>
                  <div className="grid md:grid-cols-3 gap-1 mt-2">
                    {courses
                      .find((c) => c.id === watchCourseId)
                      ?.classGroups.map((group) => (
                        <div
                          key={group.id}
                          className={`border rounded p-3 text-sm cursor-pointer ${
                            selectedClassGroup === group.id ? "bg-blue-100" : ""
                          }`}
                          onClick={() => {
                            setSelectedClassGroup(group.id);
                            setValue("classGroupId", group.id);
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <input
                              type="radio"
                              {...register("classGroupId", {
                                required: "Please select a class time",
                              })}
                              value={group.id}
                              className="hidden"
                              id={`group-${group.id}`}
                            />
                            <div
                              className={`w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center ${
                                selectedClassGroup === group.id
                                  ? "bg-blue-500"
                                  : ""
                              }`}
                            >
                              {selectedClassGroup === group.id && (
                                <div className="w-1 h-1 bg-white rounded-full"></div>
                              )}
                            </div>
                            <div>
                              <small className="font-bold">{group.date}</small>
                              <div>{group.time}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {errors.classGroupId && (
                    <span className="text-red-600 text-sm">
                      {errors.classGroupId.message}
                    </span>
                  )}
                </div>
              )}
            </div>

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
                    />
                    {errors[field.name] && (
                      <span className="text-red-600 text-sm">
                        {errors[field.name].message}
                      </span>
                    )}
                  </div>
                ))}

                {/* Qualification Field */}
                <div>
                  <label htmlFor="qualification">
                    Educational background{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    
                    id="qualification"
                    {...register("qualification", {
                      required: "Educational background is required",
                    })}
                    className="w-full rounded-md border border-gray-400 p-2 focus:outline-blue-500"
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
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:sticky top-40 z-10 pt-5">
            <div className="text-base border border-gray-400 p-5 rounded-md space-y-5 bg-white">
              <h5 className="font-semibold">Checkout Summary</h5>
              <div>
                <h6 className="text-base font-semibold">Course</h6>
                <span className="text-slate-500">
                  {watchCourseId
                    ? courses.find((c) => c.id === watchCourseId)?.name
                    : "No course has been chosen"}
                </span>
              </div>
              <div className="text-slate-500 flex justify-between">
                <span>Sub Total</span>
                <span>
                  {watchCourseId
                    ? `Rs.${
                        courses.find((c) => c.id === watchCourseId)?.price
                      }/-`
                    : "Rs.0/-"}
                </span>
              </div>

              <div className="font-bold flex justify-between">
                <span>Total Fee</span>
                <span className="text-red-500">
                  {watchCourseId
                    ? `Rs.${
                        courses.find((c) => c.id === watchCourseId)?.price
                      }/-`
                    : "Rs.0/-"}
                </span>
              </div>

              <button
                type="submit"
                className="bg-red-600 w-full text-white py-2 rounded-md flex items-center justify-center gap-2"
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
