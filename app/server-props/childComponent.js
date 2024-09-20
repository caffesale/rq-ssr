"use client";

import React from "react";
import Image from "next/image";

function ChildComponent({ photos }) {
  return (
    <section className="grid">
      {photos.map((photo) => (
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

export default ChildComponent;
