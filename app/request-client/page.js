import React from "react";
import getPhotos from "../api/getPhotos";
import MemoClientComponent from "./memoClientComponent";

async function page() {
  const data = await getPhotos();
  return (
    <div>
      <h1>albumId is {data[0].albumId}</h1>
      <MemoClientComponent />
    </div>
  );
}

export default page;
