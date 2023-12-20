import { Select, TextInput } from "@mantine/core";
import { CiSearch } from "react-icons/ci";
import { FaGlobeAfrica } from "react-icons/fa";
import Header from "./components/Header";
import Waitlist from "./components/Waitlist";
import PaymentProviders from "./components/PaymentProviders";
import FreeProviders from "./components/FreeProviders";
import PopularProviders from "./components/PopularProviders";
import Footer from "./components/Footer";
import PaymentDetails from "./components/PaymentDetails";

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
          <div className="flex flex-col sm:flex-row gap-3">
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
              placeholder="City"
              className="w-full sm:w-1/5 hidden sm:inline"
            />
          </div>

          <PaymentProviders />
          <FreeProviders />
          <PopularProviders />
        </div>

        <div className="flex-1 bg-gray-100 pt-20 pr-5 pl-5 sm:pl-10 sm:pr-10">
          <Waitlist />
          <PaymentDetails />
        </div>
      </div>

      <Footer />
    </div>
  );
}
