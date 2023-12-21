import React from "react";

const Card = () => {
  return (
    <div className="flex justify-between items-center mt-[16px]">
      <div className="w-[282px]">
        <h3 className="text-[#4C4848] text-[16px] font-[500] line-clamp-2">
          Heartland plans to integrate AI in its process to make comparison
          better and quicker.
        </h3>
        <div className="bg-[#F5F3F3] w-[78px] h-[22px] flex justify-center items-center mt-[12px] rounded-full">
          <h3 className="text-[#303538] text-[12px] font-Spline-Sans ">
            12 min read
          </h3>
        </div>
      </div>
      <img
        src="/images/pic1.png"
        alt=""
        className="w-[80px] h-[64px] bg-slate-300"
      />
    </div>
  );
};

const LatestOnProduct = () => {
  return (
    <div className="py-8 px-6 mt-5 bg-white">
      <h2 className="sm:text-lg font-semibold font-Spline-Sans">
        LATEST ON HEARTLAND PAYMENT PROCESSING
      </h2>
      <Card />
      <Card />
    </div>
  );
};

export default LatestOnProduct;
