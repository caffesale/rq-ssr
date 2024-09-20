"use client";

import React from "react";
import getPhotos from "../api/getPhotos";
import Image from "next/image";

function MemoClientComponent() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    getPhotos().then((res) => setData(res));
  }, []);

  if (!data) return <div>loading...</div>;
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

export default MemoClientComponent;
