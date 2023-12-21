import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import { Divider, Rating } from "@mantine/core";

const PaymentDetails = () => {
  return (
    <div className="w-full py-8 px-5 bg-white">
      <div className="flex flex-col items-center justify-center mb-4">
        <img
          src="/images/HeartLandLogo.png"
          alt=""
          className="w-[124px] h-[130px]"
        />
        <h2 className="text-[#403A3A] text-lg sm:text-xl font-semibold mt-4 mb-2">
          Heartland Payment Processing
        </h2>
        <p className="text-[#4C4848] text-base  mb-[6px]">
          Heartland Payment Systems
        </p>

        <div className="flex gap-[6px]">
          <div className="px-2 bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
            <IoLocation />
            <h2 className="font-medium text-xs">United States</h2>
          </div>

          <div className="px-[8px] bg-[#F3F3F3] h-[28px] flex gap-[4px] justify-center items-center rounded-full">
            <FaRegCalendarAlt />
            <h2 className="font-medium text-xs ">1997</h2>
          </div>
        </div>

        <div className="p-2 rounded-[24px] bg-[#F9F9F9] whitespace-nowrap sm:flex items-center gap-[8px] text-xs">
          <Rating defaultValue={4} /> 3/5 (1.2K)
        </div>
      </div>
      <Divider />
      <div className="my-6">
        <h2 className=" font-semibold text-[#403A3A]">ABOUT</h2>
        <p className="text-justify text-sm sm:text-base leading-[24px] mt-2 text-[#4C4848]">
          Heartland Payment Processing allows businesses to accept payments
          anywhere, anytime, on any device. Whether in the store or on the go,
          Heartland turns more shoppers into buyers and processes payments
          securely and quickly.
        </p>
      </div>
      <div className="my-6 text-[#403A3A]">
        <h2 className=" font-semibold uppercase">Target Audience</h2>
        <p className="text-justify text-sm sm:text-base mt-2 text-[#4C4848]">
          Designed to assist{" "}
          <span className="font-[500]">
            medical practices, local governments,{" "}
          </span>
          and <span className="font-[500]">utility providers </span>with an
          integrated payment processing solution.
        </p>
      </div>
      <div className="flex justify-between  gap-[24px]">
        <div className="max-w-[368px] w-full h-[48px] bg-[#F7E0E2] flex items-center">
          <h3 className="text-[#E35669] font-semibold text-sm sm:text-lg w-full text-center">
            View All
          </h3>
        </div>
        <div className="w-[48px] h-[48px] bg-[#FAFAFA] flex justify-center items-center">
          <h3 className="text-[24px] font-outfit">•••</h3>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
