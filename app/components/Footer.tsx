import { Fragment } from "react";
import { Cookies } from "./Cookies";
import posthog from "posthog-js";

const Footer = () => {
  return (
    <Fragment>
      <div className="max-w-[1400px] px-5 lg:px-10 py-[24px] lg:py-[76px] w-full bg-white grid gap-5 lg:grid-cols-2 xl:grid-cols-5 items-center justify-evenly text-center xl:text-left ">
        <div className="block xl:col-span-2 xl:flex gap-4">
          <h2 className="font-bold font-Spline-Sans text-[24px] text-[#332C2D]">
            PayCentral <span className="font-[500]">®</span>
          </h2>
          <p className="text-[14px] font-Spline-Sans w-[397px] leading-[22px] text-[#4C4848] mx-auto xl:mx-0">
            Curate and tailor payment methods based on your industry,
            preferences, and global transactions.
          </p>
        </div>

        <div className="flex justify-center gap-[24px] px-[18px] border-[#919191] border-x-[1px]">
          <p className="text-[14px] font-[400] font-Spline-Sans text-[#4C4848]">
            Terms
          </p>
          <p className="text-[14px] font-[400] font-Spline-Sans text-[#4C4848]">
            Privacy
          </p>
          <p className="text-[14px] font-[400] font-Spline-Sans text-[#4C4848]">
            Cookie
          </p>
        </div>

        <div>
          <p className="text-[14px] font-Spline-Sans text-[#4C4848]">
            For questions: paycentral@info.com
          </p>
        </div>

        <div className="flex gap-[24px] px-[24px] justify-center">
          <div className="w-[32px] h-[32px] rounded-full bg-[#979797]"></div>
          <div className="w-[32px] h-[32px] rounded-full bg-[#979797]"></div>
          <div className="w-[32px] h-[32px] rounded-full bg-[#979797]"></div>
        </div>
      </div>
      {posthog.has_opted_in_capturing() ||
      posthog.has_opted_out_capturing() ? null : (
        <Cookies />
      )}
    </Fragment>
  );
};

export default Footer;
