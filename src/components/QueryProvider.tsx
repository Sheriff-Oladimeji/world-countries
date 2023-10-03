"use client"
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

interface Props {
  children: React.ReactNode;
}

function QueryProvider({ children }: Props) {
  const client = new QueryClient()
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default QueryProvider;
