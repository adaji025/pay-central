import { Drawer, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useState } from "react";
import { IoChevronDown } from "react-icons/io5";
type IProps = {
  opened: boolean;
  close: () => void;
};

const SideMenu = ({ close, opened }: IProps) => {
  const [open, { toggle }] = useDisclosure(true);
  return (
    <Drawer opened={opened} onClose={close}>
      <div className="flex flex-col font-medium gap-2">
        <div className="cursor-pointer" onClick={close}>
            
          Why PayCentral
        </div>
        <div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={toggle}
          >
            <div>Categories</div>
            <IoChevronDown />
          </div>
          <Collapse in={open}>
            <li onClick={close}>One</li>
            <li>Two</li>
            <li>Two</li>
            <li>Two</li>
            <li>Two</li>
          </Collapse>
        </div>
      </div>
    </Drawer>
  );
};

export default SideMenu;
