import React from "react";
import getPhotos from "../api/getPhotos";
import Image from "next/image";

async function MemoChildComponent() {
  const data = await getPhotos();
  return (
    <section className="grid">
      {data.map((photo) => (
        <article key={photo.id} className="item">
          <h2>{photo.title}</h2>
          <Image
            width={200}
            height={200}
            src={photo.url}
            alt="photo-sample-image-box"
          />
        </article>
      ))}
    </section>
  );
}

export default MemoChildComponent;
