"use client";

import { Menu } from "@mantine/core";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoChevronDown } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDisclosure } from "@mantine/hooks";
import SideMenu from "./SideMenu";

const Header = () => {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Fragment>
      <SideMenu close={close} opened={opened} />
      <div className="shadow">
        <div className="bg-white max-w-[1400px] mx-auto flex items-center justify-between p-5 md:p-10">
          <div className="flex items-center gap-2">
            <GiHamburgerMenu
              size={24}
              className="cursor-pointer md:hidden"
              onClick={open}
            />
            <Image
              width={30}
              height={30}
              src="/favicon.svg"
              alt="Pay central"
              className="cursor-pointer md:hidden"
            />
            <Image
              width={180}
              height={230}
              src="/svgs/logo.svg"
              alt="Pay central"
              className="cursor-pointer hidden md:inline"
            />
          </div>
          <div className="md:flex items-center font-medium gap-10 hidden">
            <div className="cursor-pointer">Why PayCentral</div>
            <Menu shadow="md" width={200}>
              <Menu.Target>
                <div className="flex gap-2 items-center cursor-pointer">
                  <div>Categories</div>
                  <IoChevronDown />
                </div>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Item>One</Menu.Item>
                <Menu.Item>Two</Menu.Item>
              </Menu.Dropdown>
            </Menu>
          </div>
          <button className="bg-[#E35669] text-white px-4 py-2 flex gap-2 items-center">
            <div className="text-xs lg:text-base">Join the waitlist</div>
            <FaArrowRight className="hidden sm:inline" />
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
