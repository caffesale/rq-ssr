import React from "react";
import ChildComponent from "./childComponent";
import getPhotos from "../api/getPhotos";

async function page() {
  const photos = await getPhotos();
  return (
    <div>
      <h1 className="page-title">server-client props</h1>
      <ChildComponent photos={photos} />
    </div>
  );
}

export default page;
