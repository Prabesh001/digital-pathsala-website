"use client";
import { paymentGateway } from "@/utils/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import { images } from "@/public/img";
import { CircularProgress } from "@mui/material";

const Payment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    course: "",
    remarks: "",
  });
  const [photo, setPhoto] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [decoded, setDecoded] = useState(null);
  const [loading, setLoading] = useState(true);
  const [payment, setPayment] = useState();

  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      try {
        const decodedToken = jwtDecode(storedToken);
        setDecoded(decodedToken);
        setFormData((prevData) => ({
          ...prevData,
          fullName: decodedToken.name || "",
          email: decodedToken.email || "",
          phone: decodedToken.phone || "",
          course: decodedToken.course || "",
          remarks: decodedToken.remarks || "",
          price: decodedToken.price || "",
        }));
        setLoading(false);
      } catch (error) {
        console.error("Error decoding token", error);
      }
    } else {
      router.push("/enroll");
    }
  }, []);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key !== "exp" && key !== "iat") {
        data.append(key, formData[key]);
      }
    });
    if (photo) data.append("photo", photo);

    setUploading(true);
    const res = await fetch("http://localhost:3000/api/students", {
      method: "POST",
      body: data,
    });

    const result = await res.json();
    setUploading(false);
    alert(result.message);
  };

  return (
    <section className="flex flex-wrap gap-3 p-5">
      <div>
        <div className="space-y-2 lg:col-span-4">
          <h6 className="text-xl font-bold">We Accept</h6>
          <div className="flex flex-wrap gap-2">
            {paymentGateway?.map((method, index) => (
              <div
                key={index}
                className={`${
                  payment?.name === method.name
                    ? "border-green-500"
                    : "border-gray-300"
                } p-2 bg-white border min-w-50 max-w-80  flex flex-col gap-2 items-center rounded-md ${
                  index === 0 || index === 3 ? "col-span-2" : ""
                }`}
                onClick={() => setPayment(method)}
              >
                <Image
                  src={method.img}
                  alt={method.text}
                  width={300}
                  height={40}
                  className="h-[20px] object-contain"
                />
                <h2 className="text-xs font-normal">{method.text}</h2>
              </div>
            ))}
          </div>
        </div>

        {payment && (
          <div className="flex flex-col gap-y-1 my-10">
            <p className="text-gray-500">{payment.text}</p>
            <div className="h-80 w-80 m-0">
              <Image
                alt={payment.name}
                src={payment.qr}
                height={800}
                width={800}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-gray-500">Scan this Qr code for payment</p>
          </div>
        )}
      </div>

      <div className="checkout-summary min-w-50 flex-1 overflow-hidden">
        <h3 className="text-xl font-bold">Review Your Details</h3>

        <form className="flex flex-col gap-y-1 px-4 py-2 border-green-400 border-2 border-dotted">
          {Object.keys(formData).map((key) => (
            <div key={key} className="flex justify-between items-center py-2">
              <label
                htmlFor={key}
                className="capitalize text-sm text-gray-700 w-1/2"
              >
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              <input
                className="text-xs text-gray-500 outline-none w-1/2 p-1 border-gray-300 rounded"
                name={key}
                defaultValue={formData[key] || "-"}
                readOnly
              />
            </div>
          ))}
          <div className="mt-4">
            <label htmlFor="ss" className="text-sm text-gray-500">
              Upload your proof of payment
            </label>
            <div className="relative cursor-pointer mt-2 w-fit">
              <input
                id="ss"
                name="ss"
                type="file"
                accept="image/*"
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                onChange={handleFileChange}
                required
              />
              <div className="flex items-center cursor-pointer">
                <span className="text-sm border cursor-pointer rounded p-2  text-white bg-green-500">
                  Choose File
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {!photo ? "No file chosen" : photo.name}
                </span>
              </div>
            </div>
          </div>
          {preview && (
            <div className="h-[100px] w-[100px]">
              <img
                src={preview}
                alt="Preview"
                className="h-full w-full  object-cover"
              />
            </div>
          )}

          <hr className="border-gray-300 my-1" />

          <div className="flex justify-between items-center py-2">
            <label className="text-xs text-gray-700">Total</label>
            <input
              type="text"
              className="text-green-700 font-bold w-1/2 p-1 outline-0 border-gray-300 rounded"
              defaultValue={`Rs.${decoded?.price}`}
            />
          </div>

          <button
            onClick={handleUpload}
            disabled={uploading}
            className="bg-green-600 cursor-pointer hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            {uploading ? <> <CircularProgress size={15} color="white"/> Uploading...</> : "Proceed With Payment"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Payment;
