"use client";

import Card from "./UI/Card";

type Props = {
  library: {
    title: string;
    image: string;
  }[];
};

const ImageLibrary = ({ library }: Props) => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-[24px] mt-[40px]">
      {library.map((item, index) => (
        <Card key={index} title={item.title} image={item.image} />
      ))}
    </div>
  );
};

export default ImageLibrary;
