import React from "react";
import CompanyCard from "./CompanyCard";
import { IoChevronForwardOutline } from "react-icons/io5";

const FreeProviders = () => {
  return (
    <div className="my-10">
      <div className="flex justify-between mb-5">
        <div className="text-lg sm:text-2xl font-semibold">
          Free Curated Providers
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm">Explore methods curated for you</div>
          <IoChevronForwardOutline />
        </div>
      </div>
      <div className="grid gap-5">
        {[...Array(2)].map((_, i) => (
          <CompanyCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default FreeProviders;
