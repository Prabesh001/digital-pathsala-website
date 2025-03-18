import { paymentGateway } from "@/utils/data";
import Image from "next/image";
import React from "react";

const PaymentSection = () => {
  return (
    <div className="space-y-2 lg:col-span-4">
      <h6 className="text-xl font-bold">We Accept</h6>
      <div className="grid grid-cols-3 gap-2">
        {paymentGateway.map((method, index) => (
          <div
            key={index}
            className={`p-2 bg-white border border-gray-300 flex flex-col gap-2 items-center rounded-md ${
              index === 0 || index === 3 ? "col-span-2" : ""
            }`}
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
  );
};

export default PaymentSection;
