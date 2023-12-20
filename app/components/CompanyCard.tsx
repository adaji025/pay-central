import { Rating } from "@mantine/core";
import React from "react";
import { FaRegBookmark } from "react-icons/fa";

const CompanyCard = () => {
  return (
    <div className="p-4 bg-white shadow border flex justify-between w-full">
      <div className="flex items-center gap-[16px]">
        <div className="w-[124px] h-[130px]">
          <img src="/images/Img.png" alt="" />
        </div>
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-col gap-[8px]">
            <div className="font-Spline-Sans flex flex-col gap-[4px]">
              <h2 className="font-semibold text-[18px] text-[#332C2D]">
                MoniePoint
              </h2>
              <p className="font-[400] text-[16px] text-[#403A3A]">
                Powering the dreams of businesses in emerging markets
              </p>
            </div>
            <div className="hidden lg:flex items-center gap-[8px]">
              <div className="px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                POS
              </div>
              <div className="px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                Cash
              </div>
              <div className="px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                Virtual Card
              </div>
              <div className="text-[#736D6D] text-[14px]">
                +3 payment methods supported
              </div>
            </div>
          </div>
          <div className="flex gap-[4px]">
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300"></div>
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300"></div>
            <div className="w-[28px] h-[28px] rounded-full bg-gray-300"></div>

            <h3 className="text-[#736D6D] text-[14px] font-[400]">+8</h3>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-end justify-between">
        <FaRegBookmark />

        <div className="hidden p-[8px] rounded-[24px] bg-[#F9F9F9] whitespace-nowrap sm:flex items-center gap-[8px] text-xs">
          <Rating defaultValue={4} /> 3/5 (1.2K)
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
