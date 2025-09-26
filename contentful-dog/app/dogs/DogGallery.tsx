"use client";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type ContentfulImage = {
  fields: {
    file: {
      url: string;
    };
  };
};

type DogGalleryProps = {
  images: ContentfulImage[];
};

export default function DogGallery({ images }: DogGalleryProps) {
  const [open, setOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState<{ src: string }[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageClick = (images: ContentfulImage[], index = 0) => {
    const formattedImages = images.map((img) => ({
      src: "https:" + img.fields.file.url,
    }));
    setCurrentImages(formattedImages);
    setCurrentIndex(index);
    setOpen(true);
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
      {images.map((img, index) => (
        <div
          key={index}
          className="cursor-pointer"
          onClick={() => handleImageClick(images, index)}
        >
          <Image
            src={"https:" + img.fields.file.url}
            alt={`Dog image ${index + 1}`}
            width={400}
            height={300}
            className="rounded-lg"
          />
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={currentImages}
        index={currentIndex}
      />
    </div>
  );
}
