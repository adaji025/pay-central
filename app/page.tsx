"use client";

import { Menu, Select, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { FaGlobeAfrica } from "react-icons/fa";
import Header from "./components/Header";
import Waitlist from "./components/Waitlist";
import CompanyCard from "./components/CompanyCard";

export default function HomePage() {
  return (
    <div>
      <Header />

      <div className="flex flex-col lg:flex-row max-w-[1400px] mx-auto">
        <div className="w-full lg:w-2/3 flex flex-col gap-[32px] pt-20 px-5 md:px-10">
          <div className="w-full lg:w-[550px] flex flex-col gap-2">
            <h2 className="font-[700] text-[32px] lg:text-[40px] leading-[48px]">
              Empower Your Global Transactions with PayCentral
            </h2>
            <p className="font-medium text-[18px] lg:text-[20px] leading-[28px] text-[#403A3A]">
              Curate and tailor payment methods based on your industry,
              preferences, and global transactions.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pr-5 md:pr-10">
            <TextInput
              size="md"
              leftSection={<CiSearch />}
              placeholder="Search product, services, category, industry..."
              className="w-full sm:w-3/5"
            />
            <Select
              size="md"
              leftSection={<FaGlobeAfrica />}
              placeholder="Location"
              className="w-full sm:w-1/5"
            />
            <Select
              size="md"
              leftSection={<CiSearch />}
              placeholder="Location"
              className="w-full sm:w-1/5"
            />
          </div>
          <div className="my-10">
            <div className="flex justify-between mb-5">
              <div className="text-2xl font-semibold">
                Top payment providers
              </div>
              <Menu position="left-start" shadow="md" width={200}>
                <Menu.Target>
                  <button className="bg-gray-100 flex items-center px-5 py-2">Featured</button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item>one</Menu.Item>
                  <Menu.Item>one</Menu.Item>
                  <Menu.Item>one</Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
            <CompanyCard />
          </div>
        </div>
        <div className="flex-1 bg-gray-100 pt-20 pl-10 pr-10">
          <Waitlist />
        </div>
      </div>
    </div>
  );
}
