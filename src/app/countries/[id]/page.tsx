"use client"
import React from "react";

import { useFetchCountry } from "@/hooks/useFetch";

const CountryDetail = ({ params }: { params: { id: string } }) => {
  const [data, isLoading] = useFetchCountry(params.id);

  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen  w-full bg-DarkBg ">
        <div className="loader"></div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen  w-full bg-DarkBg text-DarkText font-bold text-xl">
        Country not found
      </div>
    );
  }

  return (
    <div>
      <h1>{data?.ccn3}</h1>
      {/* Render other details... */}
    </div>
  );
};

export default CountryDetail;
