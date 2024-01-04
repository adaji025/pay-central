"use client";

import React, { Fragment, useState } from "react";
import { Modal, TextInput, LoadingOverlay } from "@mantine/core";
import { LuUser } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { joinWaitlist } from "../services/waitlist";
import { JoinWaitlistTypes } from "../types/waitlist";
import { toast } from "react-toastify";
import { useForm } from "@mantine/form";

type IProps = {
  opened: boolean;
  close: () => void;
};

const WaitlistModal = ({ opened, close }: IProps) => {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: "",
      full_name: "",
    },
  });

  const submit = (values: JoinWaitlistTypes) => {
    setLoading(true);

    joinWaitlist(values)
      .then(() => {
        toast.success("You have successfully joined the waitlist");
        form.reset();
        close()
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Fragment>
      <LoadingOverlay visible={loading} />
      <Modal centered radius={0} opened={opened} onClose={close}>
        <div className="text-center">
          <h2 className="font-Spline-Sans my-[8px] font-[600] text-[20px]">
            👋🏽 Join the waitlist for PayCentral
          </h2>
          <p className="font-Spline-Sans font-[400] text-[16px] text-[#736D6D] leading-[24px]">
            Secure your spot on our exclusive waitlist for early access to the
            finest payment curation experience.
          </p>
          <form onSubmit={form.onSubmit((values) => submit(values))}>
            <TextInput
              size="md"
              mt={16}
              radius={2}
              leftSection={<LuUser />}
              placeholder="Full Name"
              className="w-full"
            />
            <TextInput
              size="md"
              type="email"
              mt={16}
              radius={2}
              leftSection={<MdOutlineEmail />}
              placeholder="Full Name"
              className="w-full"
            />

            <button className="bg-[#E35669] text-white px-4 py-2 flex gap-2 items-center justify-center mt-4 w-full">
              <div className="text-xs lg:text-base">Join the waitlist</div>
              <FaArrowRight className="hidden sm:inline" />
            </button>
          </form>
        </div>
      </Modal>
    </Fragment>
  );
};

export default WaitlistModal;
