"use client";
import { useQuery } from "react-query";
import axios from "axios";
const useFetch = () => {
  const { data, isLoading } = useQuery(["country"], () => {
    return axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res?.data);
  });
    return [data, isLoading]
};

export default useFetch