"use client";
import { useQuery } from "react-query";
import axios from "axios";
const useFetchCountries = () => {
  const { data, isLoading, error } = useQuery(["countries"], () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res?.data);
  });
  return [data, isLoading, error];
};

const useFetchCountry = (code: string) => {
  const { data, isLoading, error } = useQuery(["country", code], () => {
    return axios
      .get(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => {
        console.log("API Response:", res.data);
        return res?.data;
      });
  });
  return [data, isLoading, error];
};


export { useFetchCountries, useFetchCountry };
