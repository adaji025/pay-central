import React from "react";
import { TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { LuUser } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { joinWaitlist } from "../../services/waitlist";
import { JoinWaitlistTypes } from "../../types/waitlist";
import { toast } from "react-toastify";

type IProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const Waitlist = ({ setLoading }: IProps) => {
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
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="w-full mx-auto px-[16px] py-[24px] flex flex-col gap-[16px] mb-[10px] bg-white">
      <div className="max-w-[457px]">
        <h2 className="font-Spline-Sans my-[8px] font-[600] text-[20px]">
          👋🏽 Join the waitlist
        </h2>
        <p className="font-Spline-Sans font-[400] text-[16px] text-[#736D6D] leading-[24px]">
          Secure your spot on our exclusive waitlist for early access to the
          finest payment curation experience.
        </p>
      </div>
      <form onSubmit={form.onSubmit((values) => submit(values))}>
        <TextInput
          required
          size="md"
          radius={2}
          leftSection={<LuUser />}
          placeholder="Full Name"
          className="w-full"
          {...form.getInputProps("full_name")}
        />
        <TextInput
          required
          size="md"
          type="email"
          mt={16}
          radius={2}
          leftSection={<MdOutlineEmail />}
          placeholder="Full Name"
          className="w-full"
          {...form.getInputProps("email")}
        />

        <button className="bg-[#E35669] text-white px-4 py-2 flex gap-2 items-center justify-center mt-4 w-full">
          <div className="text-xs lg:text-base">Join the waitlist</div>
          <FaArrowRight className="hidden sm:inline" />
        </button>
      </form>
    </div>
  );
};

export default Waitlist;
