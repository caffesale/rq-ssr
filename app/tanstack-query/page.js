import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import getPhotos from "../api/getPhotos";
import QueryComponent from "./queryComponent";

async function page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
  });

  return (
    <>
      <h1 className="page-title">tanstack-query</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <QueryComponent />
      </HydrationBoundary>
    </>
  );
}

export default page;
