import { Divider, Rating } from "@mantine/core";
import React, { Fragment } from "react";

const Card = () => {
  return (
    <div className="flex justify-between gap-5 items-center">
      <div className="w-[282px] my-[16px]">
        <h3 className="font-[500] font-Spline-Sans text-[18px] text-[#403A3A]">
          Venmo
        </h3>
        <p className="text-sm text-gray-400">
          Short bio: Lorem ipsum dolor sit amet consectetur...
        </p>
        <div className="bg-[#F9F9F9] flex items-center gap-[8px] justify-center py-[4px] rounded-full w-[148px] mt-[12px]">
          <div className="flex gap-[4px]">
            <Rating defaultValue={3} />
          </div>
          <h3 className="text-xs text-[#303538] font-medium">3/5</h3>
        </div>
      </div>

      <div className="w-[64px] h-[64px]">
        <img src="/images/venmoLogo.png" alt="" />
      </div>
    </div>
  );
};

const TopAlternative = () => {
  return (
    <div className="py-8 px-6 mt-5 bg-white">
      <h2 className="sm:text-lg font-Spline-Sans text-[#403A3A] font-[600] uppercase">
        Top alternatives
      </h2>
      <div className="grid">
        {[...Array(2)].map((_, i) => (
          <Fragment>
            <Card key={i} />
            <Divider />
          </Fragment>
        ))}
      </div>

      <button className="h-[48px] bg-[#FAE8EB] flex items-center justify-center w-full mt-2">
        <h3 className="sm:text-lg font-Spline-Sans font-medium text-[#E04459]">
          View All Alternatives
        </h3>
      </button>
    </div>
  );
};

export default TopAlternative;
