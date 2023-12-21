import React from "react";
import { Rating } from "@mantine/core";

const RatingComponent = () => {
  return (
    <div className="w-full mt-5 py-8 px-5 bg-white flex flex-col gap-6 font-medium">
      <div>
        <h2 className="sm:text-lg font-semibold  text-[#403A3A] mb-4">
          RATINGS
        </h2>
        <div className="flex justify-between">
          <h3 className="text-[#4C4848]  sm:text-lg ">
            Ease of Use
          </h3>
          <div className="flex items-center gap-2 text-xs  text-[#4C4848]">
            <Rating defaultValue={3} />
            <span>3/5</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848] font-Spline-Sans sm:text-lg ">
          Customer Support
        </h3>
        <div className="flex items-center gap-2 text-xs  text-[#4C4848]">
          <Rating defaultValue={4} />
          <span>4/5</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848]  text-lg ">
          Quick Payment
        </h3>
        <div className="flex items-center gap-2  text-xs  text-[#4C4848]">
          <Rating defaultValue={4} />
          <span>4/5</span>
        </div>
      </div>
      <div className="flex justify-between">
        <h3 className="text-[#4C4848]  sm:text-lg ">
          Value for Money
        </h3>
        <div className="flex items-center gap-2 text-xs  text-[#4C4848]">
          <Rating defaultValue={4} />
          <span>4/5</span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
