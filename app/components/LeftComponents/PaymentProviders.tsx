"use client";

import React from "react";
import { Menu } from "@mantine/core";
import { IoChevronDown } from "react-icons/io5";
import CompanyCard from "./CompanyCard";

const PaymentProviders = () => {
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
              {[...Array(4)].map((_, i) => (
                <CompanyCard key={i} />
              ))}
            </div>
    </div>
  );
};

export default PaymentProviders;
