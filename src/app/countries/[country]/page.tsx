"use client";
import useFetch from "@/hooks/useFetch";
import { useRouter } from "next/router";
const CountryPage = ({ params }) => {
  const [data, isLoading] = useFetch();
  const router = useRouter();

  const fetchCountry = (country: string) => {
    const selected = data.find((item) => item?.name?.common === country);
    console.log(selected);

    if (selected) {
      return selected;
    } else {
      router.replace("/404");
      return null;
    }
  };

  const country = fetchCountry(params.id);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen  w-full bg-DarkBg ">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-xl">{country.name.common}</h1>
    </div>
  );
};

export default CountryPage;
