"use client";

import { getQueryClient } from "@/getQueryClient";
import { QueryClientProvider } from "@tanstack/react-query";

export default function Providers({ children }) {
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
