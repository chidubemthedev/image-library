"use client";

import Card from "./UI/Card";

type Props = {
  library: {
    title: string;
    image: string;
  }[];
  onImageClick: (image: { title: string; image: string }) => void;
};

const ImageLibrary = ({ library, onImageClick }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-[24px] mt-[40px]">
      {library.map((item, index) => (
        <div key={index} onClick={() => onImageClick(item)}>
          <Card title={item.title} image={item.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageLibrary;
