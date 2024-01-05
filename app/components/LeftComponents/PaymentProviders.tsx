"use client";

import React, { useEffect, useState } from "react";
import { Menu, Rating } from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import { getProviders } from "../../services/waitlist";
import { ProviderState } from "../../types/waitlist";
import { FaRegBookmark } from "react-icons/fa";

const PaymentProviders = () => {
  const [providers, setProviders] = useState<ProviderState | null>(null);

  useEffect(() => {
    handleGetProviders();
  }, []);

  const handleGetProviders = () => {
    getProviders()
      .then((res: any) => {
        setProviders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(providers);
  return (
    <div className="my-10">
      <div className="flex justify-between mb-5">
        <div className="text-lg sm:text-2xl font-semibold">
          Top payment providers
        </div>
        <Menu position="left-start" shadow="md" width={200}>
          <Menu.Target>
            <button className="bg-gray-100 flex gap-2 items-center px-5 py-2">
              <div>Featured</div>
              <IoChevronDown />
            </button>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>one</Menu.Item>
            <Menu.Item>one</Menu.Item>
            <Menu.Item>one</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </div>
      <div className="grid gap-5">
        {providers?.results.map((provider) => (
          <div className="p-4 bg-white shadow border flex justify-between w-full">
            <div className="flex items- gap-[16px]">
              <div className="w-1/3">
                <div className="w-[124px] h-[130px]">
                  <img
                    src={`https://davidinmichael.pythonanywhere.com/${provider.logo}`}
                    alt=""
                    // className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[8px]">
                  <div className="font-Spline-Sans flex flex-col gap-[4px]">
                    <h2 className="font-semibold text-[18px] text-[#332C2D]">
                      {provider?.name}
                    </h2>
                    <p className="font-[400] text-[16px] text-[#403A3A]">
                      {provider?.about}
                    </p>
                  </div>
                  <div className="hidden lg:flex items-center gap-[8px]">
                    {provider.payment_options.map((item, i) => (
                      <div className="px-[8px] py-[4px] rounded-[16px] flex justify-center text-[#736D6D] text-[14px] font-[400]">
                        {item.name}
                      </div>
                    ))}
                    <div className="text-[#736D6D] text-[14px]">
                      {provider.payment_options.length}+ payment methods
                      supported
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
                <Rating size="xs" defaultValue={provider?.average_rating} />{" "}
                {provider?.average_rating} (1.2K)
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaymentProviders;
