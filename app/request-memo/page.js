import React from "react";
import getPhotos from "../api/getPhotos";
import MemoChildComponent from "./memoChildComponent";

async function page() {
  const data = await getPhotos();
  return (
    <div>
      <h1>albumId is {data[0].albumId}</h1>
      <MemoChildComponent />
    </div>
  );
}

export default page;
