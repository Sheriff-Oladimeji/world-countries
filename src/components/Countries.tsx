"use client";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
const Countries = () => {
  const { data, isLoading } = useQuery(["country"], () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res?.data);
  });
  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen  w-full bg-DarkBg ">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <main className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 xl:grid-cols-4 w-[90%] mx-auto my-12">
      {data?.map((country) => (
        <Link
          href={`/countries/${country.name.common}`}
          key={country.name.common}
          className=" rounded-md shadow-xl w-full"
        >
          <div className="relative h-[200px]">
            <Image
              src={country.flags.png}
              alt=""
              fill
              className="w-full  object-cover rounded-t-md h-full"
            />
          </div>
          <div
            className="
          flex flex-col gap-4  mx-auto py-4 bg-DarkText dark:bg-DarkElem dark:text-DarkText px-4 text-LightText "
          >
            <h4 className="font-extrabold text-xl">{country.name.common}</h4>
            <p>
              <span className="font-bold">Population: </span>
              {country.population}
            </p>
            <p>
              <span className="font-bold">Region: </span>
              {country.region}
            </p>
            <p>
              <span className="font-bold">Capital: </span>
              {country.capital}
            </p>
          </div>
        </Link>
      ))}
    </main>
  );
};

export default Countries;
